import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Link from '../atoms/Link'
import BuyNowButton from '../atoms/BuyNowButton'
import H3 from '../atoms/H3'
import ButtonBase from '../atoms/ButtonBase'

const Wrapper = styled.div`
  width: 125px;
  a {
    color: ${({theme}) => theme.black};
    text-decoration: none;
    &:hover {
      color: ${({theme}) => theme.red};
    }
  }
`
const CoverImg = styled(Img)`
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
  text-align: center;
`

const BlankButton = styled(ButtonBase)`
  width: 125px;
  letter-spacing: 2px;
  height: 48px;
  padding: 16px 0;
  margin-top: 8px;
  &:hover {
    color: ${({theme}) => theme.red};
    text-decoration: underline;
  }
`

export default function BookWidget({coverImage, title, buyUrl, pagePath}) {
  return (
    <Wrapper>
      <Link to={pagePath}>
        <CoverImg fixed={coverImage.childImageSharp.fixed} />
        <BookTitle>{title}</BookTitle>
      </Link>
      <BuyNowButton href={buyUrl} />
      <BlankButton as={Link} to={pagePath}>
        Read More
      </BlankButton>
    </Wrapper>
  )
}
