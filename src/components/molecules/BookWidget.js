import React from 'react'
import styled from 'styled-components'

import SketchButton from '../atoms/SketchButton'
import Img from '../atoms/Img'
import H3 from '../atoms/H3'
import ButtonBase from '../atoms/ButtonBase'

const Wrapper = styled.div`
  width: 125px;
`
const Cover = styled(Img)`
  width: 125px;
  margin-bottom: 16px;
`

const BlankButton = styled(ButtonBase)`
  width: 125px;
  letter-spacing: 2px;
  height: 48px;
  padding: 16px 0;
  margin-top: 8px;
  &:hover {
    color: ${({theme}) => theme.red};
  }
`

export default function BookWidget({coverImage, title}) {
  return (
    <Wrapper>
      <Cover src={coverImage} />
      <H3 css={'margin-bottom: 16px;'}>{title}</H3>
      <SketchButton type="outline" uppercase>
        Buy Now
      </SketchButton>
      <BlankButton>Read More</BlankButton>
    </Wrapper>
  )
}
