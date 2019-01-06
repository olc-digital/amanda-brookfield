import React from 'react'
import Responsive from 'react-media'

import {sizes} from '../../styles/mediaQueries'

const Mobile = props => (
  <Responsive {...props} query={`(max-width: ${sizes.abovePhone - 1}px)`} />
)
const Default = props => (
  <Responsive {...props} query={`(min-width: ${sizes.abovePhone}px)`} />
)

export default {
  Mobile,
  Default,
}
