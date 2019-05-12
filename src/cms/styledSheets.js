import React from 'react'
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
const withStyledSheets = Component => props => {
  return (
    <StyledSheets>
      <Component {...props} />
    </StyledSheets>
  )
}

export default withStyledSheets
