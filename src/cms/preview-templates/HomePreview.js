import React from 'react'
import {HomePageTemplate} from '../../templates/home-page'

const HomePreview = ({entry, fieldsMetaData, getAsset, widgetsFor}) => {
  console.log('entry', entry.toJS())
  console.log('meta', fieldsMetaData.toJS())
  const bestSellers = fieldsMetaData.getIn([
    'bestSellers',
    'bestSeller',
    'books',
  ])

  if (!bestSellers) {
    return 'loading...'
  }

  console.log('bestSellers', bestSellers)

  const bsssers = widgetsFor('bestSellers').map(item => {
    const bestSellerKey = item.get('data')
    const x = bestSellers.toJS()
    console.log('res:', x[bestSellerKey])

    return x[bestSellerKey]
  })

  console.log('bsssers:', bsssers)

  const bestSellersArr = bsssers.toJS().filter(Boolean)
  console.log('bestSellersArr:', bestSellersArr)

  // consider switching to array setup in CMS
  // const bestSellersArr = Object.keys(bestSellers)
  //   .sort()
  //   .map(key => bestSellers[key])
  //   .map(({books}) =>
  //     Object.keys(books).reduce((acc, key) => {
  //       // this is shit
  //       return books[key]
  //     }, {}),
  //   )
  //   .map(book => ({
  //     ...book,
  //     coverImage: getAsset(book.coverImage),
  //     coverSketchImage: getAsset(book.coverSketchImage),
  //   }))

  // console.log('bs after', bestSellersArr)

  return (
    <HomePageTemplate
      welcomeText={entry.getIn(['data', 'welcomeText'])}
      bestSellers={bestSellersArr}
    />
  )
}

export default HomePreview
