import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props
    const {edges: posts, group: years} = data.allMarkdownRemark
    return (
      <section className="blog-container">
        <aside className="blog-sidebar">
          <h2>Recent Posts</h2>
          <ul>
            {posts.map(({node: post}) => (
              <li key={post.id}>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
          <h2>Archive</h2>
          <ul>
            {years.map(({fieldValue: year, totalCount}, i) => (
              <li key={i}>
                <Link to={'/'}>
                  {year} ({totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className="">
          {posts.map(({node: post}) => (
            <div key={post.id}>
              <h2 className="blog-post-title">
                <Link className="" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              </h2>
              <small className="blog-date">{post.frontmatter.date}</small>

              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-small" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </div>
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
