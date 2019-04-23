import styled from 'styled-components'
import {crimsonTextFont} from '../../styles/mixins'
import media from '../../styles/mediaQueries'

const H2 = styled.h2`
  ${crimsonTextFont}
  font-size: 20px;
  line-height: 1;
  letter-spacing: 1px;
  ${props => props.center && 'text-align: center;'}
  ${props => props.margin && 'margin: 48px 0;'}
  ${media.aboveMobile`
    ${props => props.margin && 'margin: 72px 0;'}
  `}
`

H2.defaultProps = {
  center: true,
}

export default H2
