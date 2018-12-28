import styled from 'styled-components'
import ButtonBase from './ButtonBase'
import {KalamFont} from '../../styles/mixins'

const PrimaryButton = styled(ButtonBase)`
  ${KalamFont}
  padding: 15px;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: ${({theme}) => theme.red};
  color: ${({theme}) => theme.white};
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  }
`

export default PrimaryButton
