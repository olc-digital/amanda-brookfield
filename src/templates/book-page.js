import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import styled from 'styled-components'

import media from '../styles/mediaQueries'
import {hideBelowMobile, hideAboveMobile} from '../styles/mixins'
import Content, {HTMLContent} from '../components/Content'
import H2 from '../components/atoms/H2'
import Button from '../components/atoms/ButtonBase'
import Img from '../components/atoms/Img'
import Container from '../components/atoms/Container'
import {books} from '../data'
import SketchButton from '../components/atoms/SketchButton'
import ReviewItem from '../components/molecules/ReviewItem'
import {kalamFont} from '../styles/mixins'

const BookTitle = styled(H2)`
  margin: 48px 0 21px;
  ${media.aboveMobile`
    margin: 48px 0;
  `}
`

const BookPageButton = styled(Button)`
  ${kalamFont}
  letter-spacing: 2px;
  font-size: 14px;
  height: 22px;
`
const SwitchButton = styled(BookPageButton)`
  margin: 0 5px;
  ${({active, theme}) =>
    active ? 'text-decoration: underline;' : `color: ${theme.black};`}
`

const SwitchButtonsWrapper = styled.div`
  ${hideAboveMobile}
  display: flex;
  justify-content: center;
  margin-bottom: 21px;
`
const ReviewItemsWrapper = styled.div`
  margin: 0;
  ${media.aboveMobile`
    margin: 48px 0 72px;
  `}
`

const BookBuyNowButton = props => (
  <SketchButton uppercase center styleType="outline" size="lg" {...props}>
    Buy Now
  </SketchButton>
)

const BookPageTemplate = ({
  title,
  bookId,
  content,
  reviews,
  contentComponent,
}) => {
  const [mobileReviewsVisible, setMobileReviewsVisible] = useState(false)

  const PageContent = contentComponent || Content

  return (
    <Container narrow>
      <BookPageButton
        css={`
          ${hideAboveMobile}
          margin: 21px auto;
        `}
        onClick={() => window.history.back()}
      >
        {'< Back'}
      </BookPageButton>
      <Img
        css={'width: 150px; padding: 4px; display: block; margin: 0 auto;'}
        src={books[bookId].coverSketch}
      />
      <BookTitle>{title}</BookTitle>
      <SwitchButtonsWrapper>
        <SwitchButton
          active={!mobileReviewsVisible}
          onClick={() => setMobileReviewsVisible(false)}
        >
          About
        </SwitchButton>
        <SwitchButton
          active={mobileReviewsVisible}
          onClick={() => setMobileReviewsVisible(true)}
        >
          Reviews
        </SwitchButton>
      </SwitchButtonsWrapper>
      <div css={mobileReviewsVisible && hideBelowMobile}>
        <PageContent content={content} />
      </div>
      <BookBuyNowButton size="lg" css={hideBelowMobile} />
      <ReviewItemsWrapper css={!mobileReviewsVisible && hideBelowMobile}>
        {reviews.map(review => (
          <ReviewItem key={review.text} {...review} />
        ))}
      </ReviewItemsWrapper>
      <BookBuyNowButton
        size="xl"
        css={`
          ${hideAboveMobile}
          margin: 48px auto;
        `}
      />
    </Container>
  )
}

BookPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const BookPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <BookPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      bookId={post.frontmatter.bookId}
      reviews={post.frontmatter.reviews}
      content={post.html}
    />
  )
}

BookPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BookPage

export const bookPageQuery = graphql`
  query BookPage2($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        bookId
        reviews {
          reviewer
          text
        }
      }
    }
  }
`
