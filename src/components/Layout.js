import React from 'react'
import Helmet from 'react-helmet'
import styled, {ThemeProvider} from 'styled-components'

import GlobalStyles from '../styles/globalStyles'
import theme from '../styles/theme.js'

import PreloadFonts from './PreloadFonts'
import Nav from './organisms/Nav'
import Header from './molecules/Header'
import Footer from './organisms/Footer'

const LayoutGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;
  & > * {
    width: 100vw;
  }
`

const Layout = ({children}) => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <Helmet title="Amanda Brookfield | Best-Selling Novelist" />
        <PreloadFonts />
        <LayoutGrid>
          <Header />
          <Nav />
          <div>{children}</div>
          <Footer />
        </LayoutGrid>
        <GlobalStyles />
      </>
    </ThemeProvider>
  </>
)

export default Layout
