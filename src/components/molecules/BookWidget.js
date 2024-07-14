import React from 'react'
import styled from 'styled-components'
import Img from '../PreviewCompatibleImage'

import Link from '../atoms/Link'

const Wrapper = styled.div`
  position: relative;

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
`

const BuyNowCart = styled.a`
  display: block;
  opacity: 0;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  padding: 6px;
  background-color: white;
  transition: .2s opacity ease-in-out;

  svg {
    position: relative;
    top: 1px;
    width: 100%;
    height: 100%;
  }

  ${Wrapper}:hover & {
    opacity: 0.7;
  }

  &:hover {
    opacity: 0.96 !important;
  }
`

export default function BookWidget({coverImage, buyUrl, pagePath}) {
  return (
    <Wrapper>
      <Link to={pagePath} style={{ display: 'block', lineHeight: 0 }}>
        <Img imageInfo={coverImage} />
      </Link>
      <BuyNowCart href={buyUrl}>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          viewBox="0 0 512 512">
          <g>
            <path d="M510.89,145.53l-59.55,187.55c-4.45,13.36-16.14,22.26-30.05,22.26H191.44c-13.36,0-26.16-8.35-30.61-20.59L72.91,99.34
              H22.26C10.02,99.34,0,89.32,0,77.08c0-12.24,10.02-22.26,22.26-22.26h66.23c9.46,0,17.81,6.12,21.15,15.02l90.71,240.97h211.48
              l47.3-150.26H197.01c-12.24,0-22.26-10.02-22.26-22.26c0-12.24,10.02-22.26,22.26-22.26h292.73c7.24,0,13.91,3.89,17.81,9.46
              C512,131.06,513.11,138.85,510.89,145.53z M202.58,384.84c-9.46,0-18.92,3.89-25.6,10.57c-6.68,6.68-10.58,16.14-10.58,25.6
              c0,9.46,3.9,18.92,10.58,25.6c6.67,6.68,16.14,10.58,25.6,10.58c9.46,0,18.92-3.9,25.6-10.58c6.68-6.68,10.58-16.14,10.58-25.6
              c0-9.46-3.9-18.92-10.58-25.6C221.5,388.73,212.04,384.84,202.58,384.84z M402.37,384.84c-9.46,0-18.92,3.89-25.6,10.57
              c-6.68,6.68-10.57,16.14-10.57,25.6c0,9.46,3.89,18.92,10.57,25.6c6.68,6.68,16.14,10.58,25.6,10.58c9.46,0,18.92-3.9,25.6-10.58
              s10.58-16.14,10.58-25.6c0-9.46-3.9-18.92-10.58-25.6S411.82,384.84,402.37,384.84z"/>
          </g>
        </svg>
      </BuyNowCart>
    </Wrapper>
  )
}
