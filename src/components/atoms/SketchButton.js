import styled from 'styled-components'
import ButtonBase from './ButtonBase'
import {KalamFont} from '../../styles/mixins'
import outlineBg from '../../img/button-bg-outline.svg'

const SketchButton = styled(ButtonBase)`
  ${KalamFont}
  height: 48px;
  width: ${({wide}) => (wide ? '327px' : '125px')};
  padding: 15px;
  font-size: ${({wide}) => (wide ? '12px' : '14px')};
  letter-spacing: 2px;
  text-transform: ${({uppercase}) => (uppercase ? 'uppercase' : 'none')};
  background: url(${outlineBg});
  background-size: 100% 48px;
  color: ${({theme}) => theme.white};
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  }
`

export default SketchButton
