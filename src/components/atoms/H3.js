import styled from 'styled-components'
import {CrimsonTextFont} from '../../styles/mixins'

const H3 = styled.h3`
  ${CrimsonTextFont}
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.5px;
  ${({center}) => center && 'text-align: center;'}
  ${({margin}) => margin && 'margin: 48px 0 24px;'}
`

H3.defaultProps = {
  center: true,
}

export default H3
