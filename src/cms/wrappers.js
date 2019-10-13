import React from 'react'
import {StyleSheetManager, ThemeProvider} from 'styled-components'
import Layout from '../components/Layout'
import theme from '../styles/theme.js'
import GlobalStyles from '../styles/globalStyles'

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
      <ThemeProvider theme={theme}>
        <>
          <Component {...props} />
          <GlobalStyles />
        </>
      </ThemeProvider>
    </StyledSheets>
  )
}

//eslint-disable-next-line react/display-name
export const withLayout = Component => props => (
  <StyledSheets>
    <Layout cms>
      <Component {...props} />
    </Layout>
  </StyledSheets>
)
