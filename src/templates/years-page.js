import React from 'react'
import BlogIndexPage from '../pages/blog'
import {graphql} from 'gatsby'

const YearRoute = ({data}) => {
  let year
  try {
    year = data.allMarkdownRemark.edges[0].node.frontmatter.date.slice(-4)
  } catch (err) {
    year = null
  }
  return <BlogIndexPage data={data} selectedYear={year} />
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
      filter: {fields: {year: {glob: $yearGlob}}}
    ) {
      group(field: fields___year) {
        fieldValue
        totalCount
      }
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
