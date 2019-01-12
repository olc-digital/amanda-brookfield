import React from 'react'

const Img = ({srcSet = [], src = srcSet[0], ...props}) => {
  if (srcSet && srcSet.length) {
    props.srcSet = srcSet
      .reduce((acc, src, i) => `${acc}${src} ${i + 1}x, `, '')
      .slice(0, -2)
  }
  if (src) {
    props.src = src
  }
  return <img {...props} />
}

export default Img
