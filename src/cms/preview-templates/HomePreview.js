import React from 'react'
import {HomePageTemplate} from '../../templates/home-page'

const extractCollectionData = (collection, data) => {
  return Object.keys(collection)
    .map(key => {
      const itemData = data[key]

      if (!itemData) {
        return null
      }

      return itemData.books[collection[key]]
    })
    .filter(Boolean)
}

const HomePreview = ({entry, fieldsMetaData, getAsset}) => {
  const entryJS = entry.toJS()
  const {bestSellers, heroSection, latestReleases} = entryJS.data
  const {
    bestSellers: bestSellersMeta = {},
    heroSection: heroSectionMeta = {},
    latestReleases: latestReleasesMeta = {},
  } = fieldsMetaData.toJS()
  console.log(fieldsMetaData.toJS())

  const bestSellersArr = extractCollectionData(
    bestSellers,
    bestSellersMeta,
  ).map(book => ({
    ...book,
    coverImage: getAsset(book.coverImage),
    coverSketchImage: getAsset(book.coverSketchImage),
  }))

  const [heroData = {}] = extractCollectionData(heroSection, heroSectionMeta)

  const hero = {
    title: heroSection.title,
    text: heroSection.text,
    readMoreText: heroSection.readMoreText,
    path: heroData.path,
    buyUrl: heroData.amazonLink,
    coverImage: getAsset(heroData.coverImage),
  }
  //TODO - check hero background works properly

  const latestReleasesArr = extractCollectionData(
    latestReleases,
    latestReleasesMeta,
  ).map(book => ({
    ...book,
    coverImage: getAsset(book.coverImage),
    coverSketchImage: getAsset(book.coverSketchImage),
  }))

  console.log(latestReleasesArr)

  return (
    <HomePageTemplate
      welcomeText={entry.getIn(['data', 'welcomeText'])}
      bestSellers={bestSellersArr}
      hero={hero}
      // latestReleases={latestReleasesArr}
    />
  )
}

export default HomePreview
