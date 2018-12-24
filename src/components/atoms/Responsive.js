import React from 'react'
import Responsive from 'react-responsive'

import {sizes} from '../../styles/mediaQueries'

const Mobile = props => <Responsive {...props} maxWidth={sizes.abovePhone} />
const Default = props => <Responsive {...props} minWidth={sizes.abovePhone} />

export default {
  Mobile,
  Default,
}
