import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BlogPostPreview from '../../components/BlogPostPreview'
import {metaDescriptions} from '../../data'

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props
    const {edges: posts, group: years} = data.allMarkdownRemark
    return (
      <section className="blog-container">
        <Helmet>
          <meta name="description" content={metaDescriptions.blog} />
        </Helmet>
        <aside className="blog-sidebar">
          <h2>Recent Posts</h2>
          <ul>
            {posts.slice(0, 5).map(({node: post}) => (
              <li key={post.id}>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
          <h2>Archive</h2>
          <ul>
            {years
              .map(({fieldValue: year, totalCount}, i) => {
                return (
                  <li key={i}>
                    <Link to={`/blog/years/${year}/`}>
                      {year} ({totalCount})
                    </Link>
                  </li>
                )
              })
              .reverse()}
          </ul>
        </aside>
        <div>
          {posts.map(({node: post}) => (
            <BlogPostPreview key={post.id} {...post} />
          ))}
        </div>
      </section>
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
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "dddd Do MMMM, YYYY")
          }
        }
      }
    }
  }
`
