import React from 'react'

import {hideAboveMobile} from '../../styles/mixins'
import Sketch from '../atoms/Sketch'
import H2 from '../atoms/H2'

const MobileSketchHeading = ({title, sketchType}) => (
  <div css={hideAboveMobile}>
    <Sketch style={{marginTop: 48}} center type={sketchType} />
    <H2 css={'margin: 38px 0 48px;'}>{title}</H2>
  </div>
)

export default MobileSketchHeading
