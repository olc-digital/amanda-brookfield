import React from 'react'
import styled from 'styled-components'

import media, {sizes} from '../../styles/mediaQueries'

const mobileQuery = `(max-width: ${sizes.mobile - 1}px)`
const defaultQuery = `(min-width: ${sizes.mobile}px)`

export const Source = ({mobile, ...props}) => (
  <source media={mobile ? mobileQuery : defaultQuery} {...props} />
)

export const MobileOnly = styled.div`
  ${media.aboveMobile`
    display: none;
  }
`}
`

export default {
  Source,
  MobileOnly,
}
