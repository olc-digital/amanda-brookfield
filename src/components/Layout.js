import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import GlobalStyles from '../styles/globalStyles'
import PreloadFonts from './PreloadFonts'
import MobileNavbar from './MobileNavbar'

const LayoutGrid = styled.div`
  display: grid;
`

const TemplateWrapper = ({children}) => (
  <>
    <Helmet>
      <title>Home | Gatsby + Netlify CMS</title>
    </Helmet>
    <PreloadFonts />
    <LayoutGrid>
      <MobileNavbar />
      <div>{children}</div>
    </LayoutGrid>
    <GlobalStyles />
  </>
)

export default TemplateWrapper
