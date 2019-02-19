import styled from 'styled-components'
import {CrimsonTextFont} from '../../styles/mixins'
import media from '../../styles/mediaQueries'

const H2 = styled.h2`
  ${CrimsonTextFont}
  font-size: 20px;
  line-height: 1;
  letter-spacing: 1px;
  text-align: center;
  ${props => props.margin && 'margin: 48px 0;'}
  ${media.aboveMobile`
    ${props => props.margin && 'margin: 72px 0;'}
  `}
`

export default H2
