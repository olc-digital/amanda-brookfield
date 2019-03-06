import React from 'react'
import styled from 'styled-components'

import Img from '../atoms/Img'
import outlineImg from '../../img/review-outline.svg'
import outlineWideImg from '../../img/review-outline-wide.svg'
import quoteStartImg from '../../img/quote-mark-start.svg'
import quoteEndImg from '../../img/quote-mark-end.svg'
import {kalamFont} from '../../styles/mixins'
import media from '../../styles/mediaQueries'

const Wrapper = styled.div`
  ${kalamFont}
  color: ${({theme}) => theme.black};
  padding: 24px;
  position: relative;
  background-image: url(${outlineImg});
  ${media.aboveMobile`
    background-image: url(${outlineWideImg});
  `}
  background-size: 100% 100%;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`

const ReviewBlockquote = styled.blockquote`
  font-weight: 400;
  margin: 8px 0 0 0;
  line-height: ${({theme}) => theme.lineHeight};
  position: relative;
  display: flex;
`

const TrailingQuotemark = styled(Img)`
  align-self: flex-end;
`

const ReviewerName = styled.div`
  margin-top: 8px;
  font-weight: 700;
  font-size: 16px;
`

const ReviewItem = ({text, reviewer}) => (
  <Wrapper>
    <Img alt="start quote" src={quoteStartImg} />
    <ReviewBlockquote>
      {text}
      <TrailingQuotemark alt="end quote" src={quoteEndImg} />
    </ReviewBlockquote>
    <ReviewerName>{reviewer}</ReviewerName>
  </Wrapper>
)

export default ReviewItem
