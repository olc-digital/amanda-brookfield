import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const ImgFluidOrFixed = ({style, childImageSharp, alt}) => {
  if (childImageSharp.fluid) {
    return <Img style={style} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (childImageSharp.fixed) {
    return <Img style={style} fixed={childImageSharp.fixed} alt={alt} />
  }

  return null
}

const PreviewCompatibleImage = ({imageInfo, style}) => {
  if (!imageInfo) {
    return null
  }

  const {alt = '', childImageSharp, image, path} = imageInfo

  if (image && image.childImageSharp) {
    return (
      <ImgFluidOrFixed
        style={style}
        childImageSharp={image.childImageSharp}
        alt={alt}
      />
    )
  }

  if (childImageSharp) {
    return (
      <ImgFluidOrFixed
        style={style}
        childImageSharp={childImageSharp}
        alt={alt}
      />
    )
  }

  if (path && typeof path === 'string') {
    return <img style={{display: 'block', ...style}} src={path} alt={alt} />
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
