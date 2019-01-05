import React from 'react'
import styled from 'styled-components'

import Img from '../atoms/Img'
import H3 from '../atoms/H3'

const Wrapper = styled.div`
  width: 125px;
`
const Cover = styled(Img)`
  width: 125px;
`

export default function BookWidget(props) {
  return (
    <Wrapper>
      <Cover src={props.coverImage} />
      <H3>Relative Love</H3>
      <button>Buy Now</button>
      <button>Read More</button>
    </Wrapper>
  )
}
