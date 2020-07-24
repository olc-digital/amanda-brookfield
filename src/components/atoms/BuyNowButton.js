import React from 'react'
import SketchButton from './SketchButton'

const BuyButton = ({href, text, ...props}) => (
  <SketchButton
    as="a"
    size="sm"
    styleType="outline"
    href={href}
    target="_blank"
    uppercase
    {...props}
  >
    {text || 'Buy Now'}
  </SketchButton>
)

export default BuyButton
