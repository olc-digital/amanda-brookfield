import React from 'react'
import styled from 'styled-components'
import outlineImg from '../../img/review-outline.svg'
// import outlineWideImg from '../../img/review-outline.svg'
// import media from '../../'

const Outline = styled.div`
  background: url(${outlineImg});
  background: url(${outlineImg});
`

const ReviewItem = ({text, reviewer}) => (
  <Outline>
    <blockquote>{text}</blockquote>
    <div>{reviewer}</div>
  </Outline>
)

export default ReviewItem
