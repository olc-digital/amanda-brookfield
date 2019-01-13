import React from 'react'

import {sizes} from '../../styles/mediaQueries'

const mobileQuery = `(max-width: ${sizes.mobile - 1}px)`
const defaultQuery = `(min-width: ${sizes.mobile}px)`

export const Source = ({mobile, ...props}) => (
  <source media={mobile ? mobileQuery : defaultQuery} {...props} />
)

export default {
  Source,
}
