import styled from 'styled-components'
import ButtonBase from './ButtonBase'
import {kalamFont} from '../../styles/mixins'

const BookPageButton = styled(ButtonBase)`
  ${kalamFont}
  letter-spacing: 2px;
  font-size: 14px;
  height: 22px;
  &:hover {
    text-decoration: underline;
  }
`
export default BookPageButton
