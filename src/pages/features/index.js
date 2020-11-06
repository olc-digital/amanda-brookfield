import React from 'react'
import {graphql} from 'gatsby'

import MobileSketchHeading from '../../components/molecules/MobileSketchHeading'
import Container from '../../components/atoms/Container'
import Page from '../../components/atoms/Page'
import ArticleList from '../../components/molecules/ArticleList'
import ArticleSection from '../../components/molecules/ArticleSection'

import HelmetHelper from '../../components/molecules/HelmetHelper'
import NewsletterShout from '../../components/organisms/NewsletterShout'

const FeaturesPage = ({data}) => {
  const {
    allMarkdownRemark: {edges: articles},
  } = data
  return (
    <Page>
      <HelmetHelper
        title="Features"
        metaDescription="My gallery of bestselling women’s fiction gives plot out-lines that will satisfy readers looking for romantic, realistic, heart-rending stories about love, loss, family secrets and hope."
      />
      <Container>
        <MobileSketchHeading title="Features" sketchType="features" />
        <ArticleSection>
          <ArticleList
            title="Short Stories"
            readMoreText="Read full short story >"
            items={articles.filter(
              ({node}) => node.frontmatter.articleType === 'short-story',
            )}
          />
          <ArticleList
            title="Articles"
            readMoreText="Read full article >"
            items={articles.filter(
              ({node}) => node.frontmatter.articleType === 'article',
            )}
          />
        </ArticleSection>
      </Container>
    </Page>
  )
}

export default FeaturesPage

export const pageQuery = graphql`
  query FeaturesPageQuery {
    allMarkdownRemark(
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
  }
`
