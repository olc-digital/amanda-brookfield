import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Content, {HTMLContent} from '../components/Content'
import H2 from '../components/atoms/H2'
import Img from '../components/atoms/Img'
import Container from '../components/atoms/Container'
import {books} from '../data'
import SketchButton from '../components/atoms/SketchButton'
import ReviewItem from '../components/molecules/ReviewItem'

export const BookPageTemplate = ({
  title,
  bookId,
  content,
  reviews,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <Container narrow>
      <Img
        css={'width: 150px; padding: 4px; display: block; margin: 0 auto;'}
        src={books[bookId].coverSketch}
      />
      <H2 margin>{title}</H2>
      <PageContent content={content} />
      <SketchButton uppercase center size="lg" styleType="outline">
        Buy Now
      </SketchButton>
      {reviews.map(review => (
        <ReviewItem key={review.text} {...review} />
      ))}
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
