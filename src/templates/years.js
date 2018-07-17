import React from 'react'
import Link from 'gatsby-link'
import BlogPostPreview from '../components/BlogPostPreview'

class YearRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
      </li>
    ))
    const year = this.props.pathContext.year
    const yearHeader = `Posts from ${year}`
    return (
      <section className="blog-container">
        <aside className="blog-sidebar">
          <h2>{yearHeader}</h2>
          <ul className="taglist">{postLinks}</ul>
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

export default YearRoute

export const yearPageQuery = graphql`
  query YearPage($yearGlob: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: {frontmatter: {date: {glob: $yearGlob}}}
    ) {
      totalCount
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
