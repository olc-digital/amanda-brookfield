import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import GlobalStyles from '../styles/globalStyles'
import PreloadFonts from './PreloadFonts'
import Nav from './organisms/Nav'
import Header from './molecules/Header'

const LayoutGrid = styled.div`
  display: grid;
`

const TemplateWrapper = ({children}) => (
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
)

export default TemplateWrapper
