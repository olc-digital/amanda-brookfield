import React from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'

import H2 from '../components/atoms/H2'
import SocialMediaLinks from '../components/molecules/SocialMediaLinks'
import Container from '../components/atoms/Container'
import BookWidget from '../components/molecules/BookWidget'
import Hero from '../components/organisms/Hero'
import Img from '../components/PreviewCompatibleImage'
import {crimsonTextFont} from '../styles/mixins'
import FullWidth from '../components/atoms/FullWidth'
import FeaturedBook from '../components/organisms/FeaturedBook'
import Sketch from '../components/atoms/Sketch'
import Page from '../components/atoms/Page'
import HelmetHelper from '../components/molecules/HelmetHelper'
import media from '../styles/mediaQueries'
import NewsletterShout from '../components/organisms/NewsletterShout'

const BannerImage = styled(Img)`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  padding-bottom: 30.5%;
  object-fit: cover;
  ${media.aboveContainer`
    border-radius: 5px;
    overflow: hidden;
  `}
`
const WelcomeText = styled.div`
  max-width: 486px;
  width: 100%;
  margin: 48px auto;
  text-align: center;
  line-height: ${({theme}) => theme.lineHeight};
`
export const FirstLetter = styled.span`
  ${crimsonTextFont}
  font-weight: normal;
  float: left;
  font-size: 48px;
  line-height: 48px;
  ${media.aboveMobile`
    transform: translateX(8px);
  `}
`

const Scroller = styled(FullWidth)`
  overflow-x: auto;
  margin-bottom: 48px;
  -webkit-overflow-scrolling: touch;
`
const BestSellers = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  gap: 30px;
  width: ${({theme}) => theme.containerWidth};
  padding: 0 ${({theme}) => theme.gutterSize} 24px;
  margin: 0 auto;
  & > * {
    box-sizing: content-box;
  }
`
const MobileOnlySketch = styled(Sketch)`
  margin: 48px auto;
  ${media.aboveMobile`
    display: none;
  `}
`

export const HomePageTemplate = ({
  metaDescription,
  bannerImage,
  welcomeText,
  bestSellers,
  hero,
  latestReleases = [],
}) => {
  return (
    <Page>
      <HelmetHelper title="Homepage" metaDescription={metaDescription} />
      <Container>
        <FullWidth>
          <NewsletterShout large={true} />
        </FullWidth>
        <FullWidth>
          <BannerImage
            imageInfo={bannerImage}
            style={{margin: '0 auto', width: '100%'}}
          />
        </FullWidth>
        <WelcomeText>
          <FirstLetter>{welcomeText.charAt(0)}</FirstLetter>
          {welcomeText.substring(1)}
        </WelcomeText>
        <SocialMediaLinks />
        <MobileOnlySketch type="books" />
        <Hero {...hero} />
        <H2 margin>My Best-Sellers</H2>
        <Scroller>
          <BestSellers>
            {bestSellers.slice(0, 3).map((book, index) => (
              <BookWidget
                key={index}
                coverImage={book.coverImage}
                pagePath={book.path}
                buyUrl={book.amazonLink}
              />
            ))}
          </BestSellers>
        </Scroller>
        <Scroller>
          <BestSellers>
            {bestSellers.slice(3).map((book, index) => (
              <BookWidget
                key={index}
                coverImage={book.coverImage}
                pagePath={book.path}
                buyUrl={book.amazonLink}
              />
            ))}
          </BestSellers>
        </Scroller>
      </Container>
      <Container>
        <H2 margin>Recent Releases</H2>
        {latestReleases.map((latestRelease, i) => (
          <FeaturedBook
            key={i}
            title={latestRelease.title}
            coverImage={latestRelease.coverSketchImage}
            buyUrl={latestRelease.amazonLink}
            pagePath={latestRelease.path}
          >
            {latestRelease.blurb}
          </FeaturedBook>
        ))}
      </Container>
    </Page>
  )
}

const HomePage = ({data}) => {
  const {
    markdownRemark: page,
    allMarkdownRemarkBooks: {edges},
  } = data

  const {metaDescription, bannerImage, welcomeText} = page.frontmatter

  const books = edges.map(({node: {frontmatter: book}}) => book)

  const bestSellersTitles = Object.values(page.frontmatter.bestSellers)
  const bestSellers = books.filter(book =>
    bestSellersTitles.includes(book.title),
  )

  const hero = {
    ...page.frontmatter.heroSection,
    books: page.frontmatter.heroSection.books.map(bookTitle => books.find(book => book.title === bookTitle)),
  }

  const latestReleasesItems = Object.keys(page.frontmatter.latestReleases)
    .sort()
    .map(key => page.frontmatter.latestReleases[key])
  const latestReleasesTitles = latestReleasesItems.map(({book}) => book)

  const latestReleases = books
    .filter(book => latestReleasesTitles.includes(book.title))
    .map((book, i) => ({...book, blurb: latestReleasesItems[i]?.blurb || ''}))

  return (
    <HomePageTemplate
      metaDescription={metaDescription}
      bannerImage={bannerImage}
      welcomeText={welcomeText}
      bestSellers={bestSellers}
      hero={hero}
      books={books}
      latestReleases={latestReleases}
    />
  )
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        metaDescription
        bannerImage {
          childImageSharp {
            fixed(width: 764, height: 220, quality: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        welcomeText
        bestSellers {
          bestSeller1
          bestSeller2
          bestSeller3
          bestSeller4
          bestSeller5
          bestSeller6
        }
        heroSection {
          prefix
          books
          bookIntros
          videos
        }
        latestReleases {
          latestRelease1 {
            book
            blurb
          }
          latestRelease2 {
            book
            blurb
          }
          latestRelease3 {
            book
            blurb
          }
        }
      }
    }
    allMarkdownRemarkBooks: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___originalPublicationDate]}
      filter: {frontmatter: {templateKey: {eq: "book-page"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            bookId
            title
            templateKey
            path
            amazonLink
            promoImage {
              childImageSharp {
                fixed(width: 226, height: 226, quality: 90) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
            coverImage {
              childImageSharp {
                fixed(width: 210, height: 324, quality: 90) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
            coverSketchImage {
              childImageSharp {
                fixed(width: 117, height: 165, quality: 90) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
