import React from 'react'
import Link from 'gatsby-link'

const BlogPostPreview = ({fields, frontmatter, excerpt}) => {
  return (
    <div className="blog-post-preview">
      <h2 className="blog-post-preview-title">
        <Link className="" to={fields.slug}>
          {frontmatter.title}
        </Link>
      </h2>
      <div className="blog-date">{frontmatter.date}</div>

      <p>
        {excerpt}{' '}
        <Link className="keep-reading" to={fields.slug}>
          Keep Reading →
        </Link>
      </p>
    </div>
  )
}
export default BlogPostPreview
