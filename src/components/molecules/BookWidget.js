import React from 'react'
import styled from 'styled-components'
import Img from '../PreviewCompatibleImage'

import Link from '../atoms/Link'

const Wrapper = styled.div`
  position: relative;
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

const BuyNowCart = styled.a`
  display: block;
  position: absolute;
  right: 4px;
  bottom: 4px;
  border-radius: 50%;
`

export default function BookWidget({coverImage, buyUrl, pagePath}) {
  return (
    <Wrapper>
      <Link to={pagePath}>
        <CoverImg imageInfo={coverImage} />
      </Link>
      <BuyNowCart href={buyUrl} />
    </Wrapper>
  )
}
