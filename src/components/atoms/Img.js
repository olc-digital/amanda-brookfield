import React from 'react'

const Img = ({src, srcSet = [], ...rest}) => (
  <img
    src={srcSet[0] || src}
    srcSet={`${srcSet[1] ? `${srcSet[1]} 2x,` : ''} ${
      srcSet[2] ? `${srcSet[2]} 3x` : ''
    }`}
    {...rest}
  />
)

export default Img
