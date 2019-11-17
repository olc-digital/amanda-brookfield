import React from 'react'
import {HomePageTemplate} from '../../templates/home-page'

const prepareBestSellers = (bestSellers, bestSellersData) => {
  return Object.keys(bestSellers)
    .map(bestSellerKey => {
      const bestSellerData = bestSellersData[bestSellerKey]

      if (!bestSellerData) {
        return null
      }

      return bestSellerData.books[bestSellers[bestSellerKey]]
    })
    .filter(Boolean)
}

const HomePreview = ({entry, fieldsMetaData, getAsset}) => {
  const entryJS = entry.toJS()
  const {bestSellers, heroSection} = entryJS.data
  const {bestSellers: bestSellersMeta = {}} = fieldsMetaData.toJS()

  const bestSellersArr = prepareBestSellers(bestSellers, bestSellersMeta).map(
    book => ({
      ...book,
      coverImage: getAsset(book.coverImage),
      coverSketchImage: getAsset(book.coverSketchImage),
    }),
  )

  const hero = {
    // we need to get title, path, amazonLink and coverImage for hero.
    // probably have to create a relation like we did for best sellers
    ...heroSection,
  }

  return (
    <HomePageTemplate
      welcomeText={entry.getIn(['data', 'welcomeText'])}
      bestSellers={bestSellersArr}
      hero={hero}
    />
  )
}

export default HomePreview
