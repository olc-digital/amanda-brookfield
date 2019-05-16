import React from 'react'
import Layout from '../components/Layout'
import {StyleSheetManager} from 'styled-components'

function StyledSheets({children}) {
  const iframe = document.querySelector('#nc-root iframe')
  const iframeHeadElem = iframe && iframe.contentDocument.head
  if (!iframeHeadElem) {
    return null
  }
  return (
    <StyleSheetManager target={iframeHeadElem}>{children}</StyleSheetManager>
  )
}

//eslint-disable-next-line react/display-name
export const withStyledSheets = Component => props => {
  return (
    <StyledSheets>
      <Component {...props} />
    </StyledSheets>
  )
}

export const withLayout = Component =>
  withStyledSheets(props => (
    <Layout cms>
      <Component {...props} />
    </Layout>
  ))

//https://github.com/netlify/netlify-cms/issues/2026
//https://github.com/gatsbyjs/gatsby/pull/13036
//https://www.npmjs.com/package/gatsby-plugin-netlify-cms
//https://www.npmjs.com/package/netlify-cms-app
