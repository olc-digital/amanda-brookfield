import styled from 'styled-components'
import {crimsonTextFont} from '../../styles/mixins'

const H3 = styled.h3`
  ${crimsonTextFont}
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.5px;
  ${({center}) => center && 'text-align: center;'}
  ${({margin}) => margin && 'margin: 48px 0 24px;'}
`

export default H3
