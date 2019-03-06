import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import styled from 'styled-components'

import media from '../styles/mediaQueries'
import Content, {HTMLContent} from '../components/Content'
import H2 from '../components/atoms/H2'
import Button from '../components/atoms/ButtonBase'
import Img from '../components/atoms/Img'
import Container from '../components/atoms/Container'
import {books} from '../data'
import SketchButton from '../components/atoms/SketchButton'
import ReviewItem from '../components/molecules/ReviewItem'
import {kalamFont} from '../styles/mixins'

const ReviewItemsWrapper = styled.div`
  margin: 48px 0 72px;
`
const BackButton = styled(Button)`
  ${kalamFont}
  letter-spacing: 2px;
  margin: 21px auto;
  font-size: 14px;
  height: 22px;
`

const BookBuyNowButton = props => (
  <SketchButton uppercase center styleType="outline" size="lg" {...props}>
    Buy Now
  </SketchButton>
)
class BookPageTemplate extends React.Component {
  state = {
    mobileReviewsVisible: false,
  }

  render() {
    const {title, bookId, content, reviews, contentComponent} = this.props

    const PageContent = contentComponent || Content

    return (
      <Container narrow>
        <BackButton onClick={() => window.history.back()}>
          {'< Back'}
        </BackButton>
        <Img
          css={'width: 150px; padding: 4px; display: block; margin: 0 auto;'}
          src={books[bookId].coverSketch}
        />
        <H2 margin css={'margin: 48px 0;'}>
          {title}
        </H2>
        <div onClick={() => this.setState({mobileReviewsVisible: false})}>
          desc
        </div>
        <div onClick={() => this.setState({mobileReviewsVisible: true})}>
          reviews
        </div>
        <div
          css={`
            ${this.state.mobileReviewsVisible &&
              media.belowMobile`display: none;`}
          `}
        >
          <PageContent content={content} />
        </div>
        <BookBuyNowButton
          size="lg"
          css={`
            ${media.belowMobile`
          display: none;
        `}
          `}
        />
        <ReviewItemsWrapper
          css={`
            ${!this.state.mobileReviewsVisible &&
              media.belowMobile`display: none;`}
          `}
        >
          {reviews.map(review => (
            <ReviewItem key={review.text} {...review} />
          ))}
        </ReviewItemsWrapper>
        <BookBuyNowButton
          size="xl"
          css={`
            ${media.aboveMobile`display: none;`}
          `}
        />
      </Container>
    )
  }
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
