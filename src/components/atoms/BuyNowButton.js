import React from 'react'
import {books} from '../../data'
import SketchButton from './SketchButton'

const BuyButton = ({bookId, ...props}) => (
  <SketchButton
    as="a"
    size="sm"
    styleType="outline"
    href={books[bookId].buyOptions.amazon}
    target="_blank"
    uppercase
    {...props}
  >
    Buy Now
  </SketchButton>
)

export default BuyButton
