import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const Announcement = () => {
  const {allMarkdownRemark} = useStaticQuery(
    graphql`
      query Announcement {
        allMarkdownRemark(
          limit: 1
          filter: {fileAbsolutePath: {regex: "/(announcement)/"}}
          sort: {order: DESC, fields: [frontmatter___date]}
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                templateKey
              }
            }
          }
        }
      }
    `,
  )

  return <>{allMarkdownRemark.edges[0].node.html}</>
}

export default Announcement
