import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import GlobalStyles from '../styles/globalStyles'
import PreloadFonts from './PreloadFonts'
import Nav from './organisms/Nav'
import Header from './molecules/Header'
import {ThemeProvider} from 'styled-components'
import theme from '../styles/theme.js'

const LayoutGrid = styled.div`
  display: grid;
`

const Layout = ({children}) => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <Helmet title="Home | Gatsby + Netlify CMS" />
        <PreloadFonts />
        <LayoutGrid>
          <Header />
          <Nav />
          <div>{children}</div>
        </LayoutGrid>
        <GlobalStyles />
      </>
    </ThemeProvider>
  </>
)

export default Layout
