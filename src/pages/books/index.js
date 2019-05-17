import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {graphql} from 'gatsby'

import BookWidget from '../../components/molecules/BookWidget'
import {books} from '../../data'
import MobileSketchHeading from '../../components/molecules/MobileSketchHeading'
import Container from '../../components/atoms/Container'
import media from '../../styles/mediaQueries'
import Page from '../../components/atoms/Page'
import ArticleList from '../../components/molecules/ArticleList'
import ArticleSection from '../../components/molecules/ArticleSection'

import HelmetHelper from '../../components/molecules/HelmetHelper'

const booksArray = Object.values(books)

const BooksWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-right: -30px;
  & > div {
    margin-right: 30px;
    margin-bottom: 24px;
  }
  ${media.belowMobile`
    margin-right: -16px;
    & > div {
    margin-right: 16px;
  }
  `}
`

export default class BooksPageQuery extends React.Component {
  render() {
    const {
      data: {
        allMarkdownRemark: {edges: articles},
      },
    } = this.props
    return (
      <Page>
        <HelmetHelper
          title="Books"
          metaDescription="My gallery of bestselling women’s fiction gives plot out-lines that will satisfy readers looking for romantic, realistic, heart-rending stories about love, loss, family secrets and hope."
        />
        <Container>
          <MobileSketchHeading title="Books" sketchType="books" />
          <BooksWrapper>
            {booksArray.map(book => (
              <BookWidget key={book.id} {...book} />
            ))}
          </BooksWrapper>
          <ArticleSection>
            <ArticleList
              title="Articles"
              readMoreText="Read full article >"
              items={articles.filter(
                ({node}) => node.frontmatter.articleType === 'article',
              )}
            />
            <ArticleList
              title="Short Stories"
              readMoreText="Read full short story >"
              items={articles.filter(
                ({node}) => node.frontmatter.articleType === 'short-story',
              )}
            />
          </ArticleSection>
        </Container>
      </Page>
    )
  }
}

BooksPageQuery.propTypes = {
  data: PropTypes.shape({}),
}

export const pageQuery = graphql`
  query BooksPageQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {templateKey: {in: ["article-page", "book-page"]}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            templateKey
            articleType
          }
        }
      }
    }
  }
`
