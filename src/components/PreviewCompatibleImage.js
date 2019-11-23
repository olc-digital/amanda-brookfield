import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const ImgFluidOrFixed = ({style, childImageSharp, alt, className}) => {
  if (childImageSharp.fluid) {
    return (
      <Img
        style={style}
        className={className}
        fluid={childImageSharp.fluid}
        alt={alt}
      />
    )
  }

  if (childImageSharp.fixed) {
    return (
      <Img
        style={style}
        className={className}
        fixed={childImageSharp.fixed}
        alt={alt}
      />
    )
  }

  return null
}

const PreviewCompatibleImage = ({imageInfo, style, className}) => {
  if (!imageInfo) {
    return null
  }

  const {alt = '', childImageSharp, image, path} = imageInfo

  if (image && image.childImageSharp) {
    return (
      <ImgFluidOrFixed
        className={className}
        style={style}
        childImageSharp={image.childImageSharp}
        alt={alt}
      />
    )
  }

  if (childImageSharp) {
    return (
      <ImgFluidOrFixed
        className={className}
        style={style}
        childImageSharp={childImageSharp}
        alt={alt}
      />
    )
  }

  if (path && typeof path === 'string') {
    return (
      <img
        style={{display: 'block', ...style}}
        className={className}
        src={path}
        alt={alt}
      />
    )
  }

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object,
  }),
}

export default PreviewCompatibleImage
