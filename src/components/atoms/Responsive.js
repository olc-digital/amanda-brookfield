import React from 'react'
import Responsive from 'react-responsive'

import {sizes} from '../../styles/mediaQueries'

const Mobile = props => (
  <Responsive {...props} query={`(max-width: ${sizes.aboveMobile - 1}px)`} />
)
const Default = props => (
  <Responsive {...props} query={`(min-width: ${sizes.aboveMobile}px)`} />
)

export default {
  Mobile,
  Default,
}
