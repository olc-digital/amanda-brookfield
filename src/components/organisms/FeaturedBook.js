import React from 'react'
import styled from 'styled-components'
import Img from '../PreviewCompatibleImage'

import Link from '../atoms/Link'
import H3 from '../atoms/H3'
import P from '../atoms/P'
import media from '../../styles/mediaQueries'
import SketchButton from '../atoms/SketchButton'
import BuyNowButton from '../atoms/BuyNowButton'

const Grid = styled.div`
  display: grid;
  margin: 72px 0;
  grid-template-columns: 140px 1fr;
  grid-template-areas:
    'cover desc'
    'actions desc';
  grid-template-rows: max-content;
  ${media.aboveMobile`
    grid-template-columns: 188px 1fr;
    grid-template-areas:
      'cover desc'
      'cover actions';
  `}
`

const SketchCover = styled.div`
  grid-area: cover;
  margin-bottom: 16px;
  ${media.aboveMobile`
    margin-left: 24px;
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
  padding-top: 8px;
  ${media.aboveMobile`
    grid-gap: 16px;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
  `}
`

export default function FeaturedBook({
  children,
  title,
  coverImage,
  buyUrl,
  pagePath,
}) {
  return (
    <Grid>
      <SketchCover>
        <Img style={{width: 117}} imageInfo={coverImage} />
      </SketchCover>
      <Description>
        <H3 center={false}>{title}</H3>
        <P>{children}</P>
      </Description>
      <Actions>
        <BuyNowButton styleType="primary" href={buyUrl} />
        <SketchButton as={Link} to={pagePath} size="sm" styleType="outline">
          Read More
        </SketchButton>
      </Actions>
    </Grid>
  )
}
