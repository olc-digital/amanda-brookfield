import React from 'react'

const ReviewItem = ({text, reviewer}) => (
  <div>
    <blockquote>{text}</blockquote>
    <div>{reviewer}</div>
  </div>
)

export default ReviewItem
