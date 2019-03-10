import React from 'react'

import CursiveButton from './CursiveButton'
import {hideAboveMobile} from '../../styles/mixins'

const BackButton = props => (
  <CursiveButton
    css={`
      ${hideAboveMobile}
      margin: 21px auto;
    `}
    onClick={() => window.history.back()}
    {...props}
  >
    {'< Back'}
  </CursiveButton>
)

export default BackButton
