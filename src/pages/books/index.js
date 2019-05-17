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
import H2 from '../../components/atoms/H2'
import BlogListItem from '../../components/molecules/BlogListItem'
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

const ArticleSection = styled.section`
  margin: 0 -12px;
  display: flex;
  flex-direction: column;
  ${media.aboveMobile`
    flex-direction: row;
  `}
`

const ArticleList = ({title, items, displayType, readMoreText}) => (
  <div css={'flex: 1; margin: 0 12px;'}>
    <H2
      css={`
        margin: 72px 0 48px;
        ${media.aboveMobile`
          margin-bottom: 72px;
        `}
      `}
    >
      {title}
    </H2>
    <div>
      {items
        .filter(({node}) => node.frontmatter.articleType === displayType)
        .map(({node}) => (
          <BlogListItem
            key={node.id}
            title={node.frontmatter.title}
            to={node.fields.slug}
            excerpt={node.excerpt}
            readMoreText={readMoreText}
            metaText={`${node.timeToRead} min read`}
          />
        ))}
    </div>
  </div>
)
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
              displayType="article"
              readMoreText="Read full article >"
              items={articles}
            />
            <ArticleList
              title="Short Stories"
              displayType="short-story"
              readMoreText="Read full short story >"
              items={articles}
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
