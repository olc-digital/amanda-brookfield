import styled from 'styled-components'
import sketchSprite from '../../img/sketch-sprite.gif'

const map = {
  books: 0,
  author: 1,
  blog: 2,
  events: 3,
}
const Sketch = styled.div`
  width: 90px;
  height: 90px;
  background-image: url(${sketchSprite});
  background-size: 200% auto;
  background-repeat: no-repeat;
  background-position-y: -${({type}) => map[type] * 90}px;
  ${({hoverComponent: hc}) =>
    `${hc ? `${hc}:hover &` : `&:hover`} {background-position-x: right;}`}
`

export default Sketch
