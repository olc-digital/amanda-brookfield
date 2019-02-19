import React from 'react'
import styled from 'styled-components'

import Img from '../atoms/Img'
import H3 from '../atoms/H3'
import P from '../atoms/P'
import media from '../../styles/mediaQueries'
import SketchButton from '../atoms/SketchButton'

import {books} from '../../data'

const Wrapper = styled.div`
  display: grid;
  margin: 72px 0;
  grid-template-areas:
    'cover desc'
    'actions desc';
  grid-template-rows: max-content;
  ${media.aboveMobile`
    grid-template-areas:
      'cover desc'
      'cover actions';
  `}
`

const SketchCover = styled.div`
  grid-area: cover;
  padding: 0 24px 16px 0;
  ${media.aboveMobile`
    padding: 0 46px 0 24px;
  `}
`
const Description = styled.div`
  grid-area: desc;
  p {
    margin: 8px 0 16px;
  }
`
const Actions = styled.div`
  grid-area: actions;
  display: grid;
  grid-gap: 4px;
  grid-auto-flow: row;
  grid-auto-rows: min-content;
  ${media.aboveMobile`
    grid-gap: 16px;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
  `}
`

export default function FeaturedBook(props) {
  return (
    <Wrapper>
      <SketchCover>
        <Img
          css={'width: 125px; padding: 4px;'}
          src={books[props.bookId].coverSketch}
        />
      </SketchCover>
      <Description>
        <H3 center={false}>{books[props.bookId].title}</H3>
        <P>{props.children || books[props.bookId].blurb}</P>
      </Description>
      <Actions>
        <SketchButton uppercase>Buy Now</SketchButton>
        <SketchButton type="outline">Read More</SketchButton>
      </Actions>
    </Wrapper>
  )
}
