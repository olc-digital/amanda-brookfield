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
  const {bestSellers: bestSellersMeta = {}} = fieldsMetaData.toJS()
  const {bestSellers} = entryJS.data
  const bestSellersArr = prepareBestSellers(bestSellers, bestSellersMeta).map(
    book => ({
      ...book,
      coverImage: getAsset(book.coverImage),
      coverSketchImage: getAsset(book.coverSketchImage),
    }),
  )

  return (
    <HomePageTemplate
      welcomeText={entry.getIn(['data', 'welcomeText'])}
      bestSellers={bestSellersArr}
    />
  )
}

export default HomePreview
