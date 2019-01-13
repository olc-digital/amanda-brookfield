import styled from 'styled-components'
import sketchSprite from '../../img/sketch-sprite.gif'

const map = {
  books: 0,
  author: 1,
  blog: 2,
  events: 3,
  newspaper: 4,
}
const Sketch = styled.div`
  width: 92px;
  height: 92px;
  background-image: url(${sketchSprite});
  background-size: 200% auto;
  background-repeat: no-repeat;
  background-position-y: -${({type}) => map[type] * 92}px;
  ${({enableHover, hoverComponent: hc}) =>
    (enableHover || hc) &&
    `${hc ? `${hc}:hover &` : `&:hover`} {background-position-x: right;}`}
  .active & {
    background-position-x: right;
  }
`

export default Sketch
