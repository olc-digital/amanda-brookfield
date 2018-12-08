import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import 'typeface-crimson-text'
import '../styles/index.css'

import MobileNavbar from './MobileNavbar'

const LayoutGrid = styled.div`
  display: grid;
`

const TemplateWrapper = ({children}) => (
  <>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <LayoutGrid>
      <MobileNavbar />
      <div>{children}</div>
    </LayoutGrid>
  </>
)

export default TemplateWrapper
