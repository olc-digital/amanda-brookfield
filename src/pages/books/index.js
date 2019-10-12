import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {graphql} from 'gatsby'

import BookWidget from '../../components/molecules/BookWidget'
import MobileSketchHeading from '../../components/molecules/MobileSketchHeading'
import Container from '../../components/atoms/Container'
import media from '../../styles/mediaQueries'
import Page from '../../components/atoms/Page'
import ArticleList from '../../components/molecules/ArticleList'
import ArticleSection from '../../components/molecules/ArticleSection'

import HelmetHelper from '../../components/molecules/HelmetHelper'

const BooksWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-right: -30px;
  > div {
    margin-right: 30px;
    margin-bottom: 24px;
  }
  ${media.belowMobile`
    margin-right: -16px;
    > div {
    margin-right: 16px;
  }
  `}
`

const BooksPage = ({data}) => {
  const {
    allMarkdownRemarkArticles: {edges: articles},
    allMarkdownRemarkBooks: {edges: books},
  } = data
  return (
    <Page>
      <HelmetHelper
        title="Books"
        metaDescription="My gallery of bestselling women’s fiction gives plot out-lines that will satisfy readers looking for romantic, realistic, heart-rending stories about love, loss, family secrets and hope."
      />
      <Container>
        <MobileSketchHeading title="Books" sketchType="books" />
        <BooksWrapper>
          {books.map(({node: book}) => (
            <BookWidget
              key={book.id}
              coverImage={book.frontmatter.coverImage}
              title={book.frontmatter.title}
              pagePath={book.frontmatter.path}
              buyUrl={book.frontmatter.amazonLink}
            />
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

BooksPage.propTypes = {
  data: PropTypes.shape({}),
}

export default BooksPage

export const pageQuery = graphql`
  query BooksPageQuery {
    allMarkdownRemarkArticles: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {templateKey: {in: ["article-page"]}}}
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
    allMarkdownRemarkBooks: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___originalPublicationDate]}
      filter: {frontmatter: {templateKey: {in: ["book-page"]}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            bookId
            title
            templateKey
            path
            amazonLink
            coverImage {
              childImageSharp {
                fixed(width: 125, height: 192, quality: 90) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
