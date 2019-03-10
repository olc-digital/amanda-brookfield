import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import styled from 'styled-components'

import MobileSketchHeading from '../../components/molecules/MobileSketchHeading'
import Page from '../../components/atoms/Page'
import Container from '../../components/atoms/Container'
import BlogSidebar from '../../components/organisms/BlogSidebar'
import BlogListItem from '../../components/molecules/BlogListItem'
import {hideBelowMobile} from '../../styles/mixins'

const BlogLayout = styled.div`
  display: flex;
`

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props
    const {edges: posts, group: years} = data.allMarkdownRemark

    return (
      <Page>
        <Container narrow>
          <MobileSketchHeading title="Blog" sketchType="blog" />
          <BlogLayout>
            <BlogSidebar css={hideBelowMobile} posts={posts} years={years} />
            <div>
              {posts.map(({node: post}) => (
                <BlogListItem
                  key={post.id}
                  id={post.id}
                  to={post.fields.slug}
                  title={post.frontmatter.title}
                  excerpt={post.excerpt}
                  date={post.frontmatter.date}
                />
              ))}
            </div>
          </BlogLayout>
        </Container>
      </Page>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
    ) {
      group(field: fields___year) {
        fieldValue
        totalCount
      }
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "ddd Do MMM, YYYY")
          }
        }
      }
    }
  }
`
