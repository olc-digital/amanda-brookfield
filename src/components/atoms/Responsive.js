import React from 'react'
import Responsive from 'react-responsive'

import {sizes} from '../../styles/mediaQueries'

const mobileQuery = `(max-width: ${sizes.aboveMobile - 1}px)`
const defaultQuery = `(min-width: ${sizes.aboveMobile}px)`

export const Mobile = props => <Responsive {...props} query={mobileQuery} />
export const Default = props => <Responsive {...props} query={defaultQuery} />

export const Source = ({mobile, ...props}) => (
  <source media={mobile ? mobileQuery : defaultQuery} {...props} />
)

export default {
  Mobile,
  Default,
  Source,
}
