import React from 'react'
import styled from 'styled-components'

import Link from '../atoms/Link'
import SketchButton from '../atoms/SketchButton'
import Img from '../atoms/Img'
import H3 from '../atoms/H3'
import ButtonBase from '../atoms/ButtonBase'

const Wrapper = styled.div`
  width: 125px;
`
const Cover = styled(Img)`
  width: 125px;
  height: 192px;
  margin-bottom: 9px;
`

const BookTitle = styled(H3)`
  min-height: 32px;
  margin-bottom: 7px;
  align-items: center;
  display: flex;
  justify-content: center;
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

export default function BookWidget({coverImage, title, id}) {
  return (
    <Wrapper>
      <Link to={`/books/${id}`}>
        <Cover src={coverImage} />
        <BookTitle>{title}</BookTitle>
      </Link>
      <SketchButton
        as="a"
        href="http://www.google.com"
        target="_blank"
        size="sm"
        styleType="outline"
        uppercase
      >
        Buy Now
      </SketchButton>
      <BlankButton as={Link} to={`/books/${id}`}>
        Read More
      </BlankButton>
    </Wrapper>
  )
}
