import React from 'react'
import {graphql} from 'gatsby'

import Content, {HTMLContent} from '../components/Content'
import Page from '../components/atoms/Page'
import Container from '../components/atoms/Container'
import HelmetHelper from '../components/molecules/HelmetHelper'

import StyledMarkdown from '../components/atoms/StyledMarkdown'
import AuthorHeader from '../components/organisms/AuthorHeader'

export const AuthorPageTemplate = ({
  title,
  content,
  contentComponent,
  metaDescription,
  inspirationImage,
  biographyImage,
  mabelImage,
}) => {
  const AuthorContent = contentComponent || Content

  return (
    <Page>
      <HelmetHelper title={title} metaDescription={metaDescription} />
      <AuthorHeader
        inspirationImage={inspirationImage}
        biographyImage={biographyImage}
        mabelImage={mabelImage}
      />
      {content && (
        <Container narrow>
          <StyledMarkdown>
            <h2>{title}</h2>
            <AuthorContent content={content} />
          </StyledMarkdown>
        </Container>
      )}
    </Page>
  )
}

const AuthorPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <>
      <AuthorPageTemplate
        title={post.frontmatter.title}
        metaDescription={post.frontmatter.metaDescription}
        inspirationImage={post.frontmatter.inspirationImage}
        biographyImage={post.frontmatter.biographyImage}
        mabelImage={post.frontmatter.mabelImage}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </>
  )
}

export default AuthorPage

export const authorPageQuery = graphql`
  query AuthorPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        title
        metaDescription
        inspirationImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        biographyImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mabelImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
