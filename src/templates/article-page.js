import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

import HelmetHelper from '../components/molecules/HelmetHelper'
import Content, {HTMLContent} from '../components/Content'
import H2 from '../components/atoms/H2'
import Container from '../components/atoms/Container'
import Page from '../components/atoms/Page'
import BackButton from '../components/atoms/BackButton'

export const ArticlePageTemplate = ({
  title,
  content,
  contentComponent,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Page>
      {helmet}
      <Container narrow>
        <BackButton />
        <H2 css={'margin: 20px 0 48px;'}>{title}</H2>
        <PostContent content={content} />
      </Container>
    </Page>
  )
}

ArticlePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ArticlePage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <ArticlePageTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <HelmetHelper
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
      }
      title={post.frontmatter.title}
    />
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleById($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
