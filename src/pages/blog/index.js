import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import styled from 'styled-components'

import Container from '../../components/atoms/Container'
import BlogSidebar from '../../components/organisms/BlogSidebar'
import H3 from '../../components/atoms/H3'
import P from '../../components/atoms/P'
import CursiveButton from '../../components/atoms/CursiveButton'

const BlogLayout = styled.div`
  display: flex;
`

const BlogListItem = styled(Link)`
  display: block;
  margin-bottom: 48px;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${({theme}) => theme.grey};
    ${CursiveButton} {
      text-decoration: underline;
    }
  }
`

const BlogItemMeta = styled.div`
  font-style: italic;
  color: ${({theme}) => theme.grey};
`

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props
    const {edges: posts, group: years} = data.allMarkdownRemark

    return (
      <Container narrow>
        <BlogLayout>
          <BlogSidebar posts={posts} years={years} />
          <div>
            {posts.map(({node: post}) => (
              <BlogListItem key={post.id} to={post.fields.slug}>
                <H3 css={'margin-bottom: 4px;'}>{post.frontmatter.title}</H3>
                <P css={'margin-bottom: 20px;'}>{post.excerpt}</P>
                <div css={'display: flex; justify-content: space-between;'}>
                  <BlogItemMeta>{post.frontmatter.date}</BlogItemMeta>
                  <CursiveButton>{'Read full blog post >'}</CursiveButton>
                </div>
              </BlogListItem>
            ))}
          </div>
        </BlogLayout>
      </Container>
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
