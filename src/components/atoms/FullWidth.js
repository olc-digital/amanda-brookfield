import styled from 'styled-components'
import media from '../../styles/mediaQueries'

const FullWidth = styled.div`
  margin: 0 -64px;

  ${media.belowMobile`
    margin: 0 - 24px;
  `}
`

export default FullWidth
