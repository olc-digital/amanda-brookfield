import React from 'react'
import styled from 'styled-components'
import sketchSprite from '../../img/sketch-sprite.gif'
import H2 from './H2'

const map = {
  books: 0,
  author: 1,
  blog: 2,
  events: 3,
}
const SketchWrapper = styled.div`
  display: inline-block;
  text-align: center;
`
const SketchImage = styled.div`
  width: 90px;
  height: 90px;
  background-image: url(${sketchSprite});
  background-size: 200% auto;
  background-repeat: no-repeat;
  background-position-y: -${({type}) => map[type] * 90}px;
  ${SketchWrapper}:hover & {
    background-position-x: right;
  }
`
const SketchHeader = styled(H2)`
  margin-top: 10px;
`

const Sketch = ({type, heading, headingComponent: HeadingComponent}) => (
  <SketchWrapper>
    <SketchImage type={type} />
    {heading && <HeadingComponent>{heading}</HeadingComponent>}
  </SketchWrapper>
)

Sketch.defaultProps = {
  headingComponent: SketchHeader,
}

export default Sketch
