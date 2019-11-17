import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {graphql} from 'gatsby'

import H2 from '../components/atoms/H2'
import SocialMediaLinks from '../components/molecules/SocialMediaLinks'
import Container from '../components/atoms/Container'
import BookWidget from '../components/molecules/BookWidget'
import GoodGirlsHero from '../components/organisms/GoodGirlsHero'
import bannerDesktop1x from '../img/home-banner-desktop.jpg'
import bannerDesktop2x from '../img/home-banner-desktop@2x.jpg'
import bannerDesktop3x from '../img/home-banner-desktop@3x.jpg'
import {crimsonTextFont} from '../styles/mixins'
import FullWidth from '../components/atoms/FullWidth'
import FeaturedBook from '../components/organisms/FeaturedBook'
import Sketch from '../components/atoms/Sketch'
import Page from '../components/atoms/Page'
import HelmetHelper from '../components/molecules/HelmetHelper'
import media from '../styles/mediaQueries'

const AmandaImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  height: 280px;
  max-width: 764px;
  object-fit: cover;
  ${media.aboveMobile`
    height: 220px;
  `}
  ${media.aboveContainer`
    border-radius: 5px;
  `}
`
const WelcomeText = styled.div`
  max-width: 486px;
  width: 100%;
  margin: 48px auto;
  text-align: center;
  line-height: ${({theme}) => theme.lineHeight};
`
const FirstLetter = styled.span`
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
  overflow-x: scroll;
  margin-bottom: 48px;
  -webkit-overflow-scrolling: touch;
`
const BestSellers = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({theme}) => theme.containerWidth};
  padding: 0 ${({theme}) => theme.gutterSize} 24px;
  & > * {
    box-sizing: content-box;
    margin-right: 30px;
  }
  & > *:last-child {
    margin-right: 0;
    padding-right: ${({theme}) => theme.gutterSize};
    ${media.aboveMobile`
      padding-right: 0;
    `}
  }
`
const MobileOnlySketch = styled(Sketch)`
  margin: 48px auto;
  ${media.aboveMobile`
    display: none;
  `}
`

export const HomePageTemplate = ({
  welcomeText,
  bestSellers,
  books,
  heroData,
}) => {
  // const {node: goodGirls} = books.find(
  //   ({node: book}) => book.frontmatter.bookId === 'good-girls',
  // )
  // const {node: ftLoad} = books.find(
  //   ({node: book}) => book.frontmatter.bookId === 'for-the-love-of-a-dog',
  // )
  // const {node: theLoveChild} = books.find(
  //   ({node: book}) => book.frontmatter.bookId === 'the-love-child',
  // )

  return (
    <Page>
      <HelmetHelper
        title="Homepage"
        metaDescription="Meet me, Amanda Brookfield and my page - turning emotional bestselling novels. My latest, ‘For the Love of a Dog’, is a poignant, uplifting memoir about finding happiness after divorce. @ABrookfield1"
      />
      <Container>
        <FullWidth>
          <picture>
            <source
              srcSet={`${bannerDesktop1x} 1x, ${bannerDesktop2x} 2x, ${bannerDesktop3x} 3x,`}
            />
            <AmandaImage
              src={bannerDesktop1x}
              alt="Amanda Brookfield Portrait"
            />
          </picture>
        </FullWidth>
        <WelcomeText>
          <FirstLetter>{welcomeText.charAt(0)}</FirstLetter>
          {welcomeText.substring(1)}
        </WelcomeText>
        <SocialMediaLinks />
        <MobileOnlySketch type="books" />
        <H2 margin>My Best-Sellers</H2>
        <Scroller>
          <BestSellers>
            {bestSellers.map((book, index) => (
              <BookWidget
                key={index}
                coverImage={book.coverImage}
                title={book.title}
                pagePath={book.path}
                buyUrl={book.amazonLink}
              />
            ))}
          </BestSellers>
        </Scroller>
      </Container>
      {/* <GoodGirlsHero
        pagePath={goodGirls.frontmatter.path}
        buyUrl={goodGirls.frontmatter.amazonLink}
        coverImage={heroData.frontmatter.coverImage}
      /> */}
      {/* <Container>
        <H2 margin>Latest Releases</H2>
        <FeaturedBook
          title={goodGirls.frontmatter.title}
          coverImage={goodGirls.frontmatter.coverSketchImage}
          buyUrl={goodGirls.frontmatter.amazonLink}
          pagePath={goodGirls.frontmatter.path}
        >
          {`Published in October 2019, 'Good Girls' tells the compelling story 
          of the Keating sisters: Kat is mesmerising, beautiful, smart and 
          charming - everything a good girl should be. Her elder sister Eleanor,
          on the other hand, is on the awkward side of tall, clever enough to 
          be bullied, and full of the responsibilities only an older sibling can
          understand.  She adores her little sister but grows up certain that
          she can never compete with her.`}
        </FeaturedBook>
        <FeaturedBook
          title={ftLoad.frontmatter.title}
          coverImage={ftLoad.frontmatter.coverSketchImage}
          buyUrl={ftLoad.frontmatter.amazonLink}
          pagePath={ftLoad.frontmatter.path}
        >
          {`Published in November 2018, 'For the Love of a Dog' is a funny and
            poignant memoir of emotional meltdown and recovery with the
            unwitting aid of a Golden Doodle puppy called Mabel. Following the
            death of my mother and the end of a post-divorce relationship, my
            world fell apart and desolation closed in. Talk of getting a puppy
            was just to cheer myself up. I never thought I would actually go
            through with it; I was barely capable of looking after myself, let
            alone a dog…`}
        </FeaturedBook>
        <FeaturedBook
          title={theLoveChild.frontmatter.title}
          coverImage={theLoveChild.frontmatter.coverSketchImage}
          buyUrl={theLoveChild.frontmatter.amazonLink}
          pagePath={theLoveChild.frontmatter.path}
        >
          {`Published in Jan 2013, 'The Love Child' is a touching and heartfelt
            story about discovering what matters most in your life and having
            the courage to reach for it - not just once, but again and again.`}
          <br />
          {`When Janine and Dougie fell in love they thought it would be for
            ever. Fifteen years later their relationship is well and truly over,
            their daughter Stevie their one remaining connection...`}
        </FeaturedBook>
      </Container> */}
    </Page>
  )
}

HomePageTemplate.propTypes = {
  welcomeText: PropTypes.string.isRequired,
}

const HomePage = ({data}) => {
  const {
    markdownRemark: page,
    allMarkdownRemarkBooks: {edges: books},
    heroData,
  } = data

  const {welcomeText, bestSellers} = page.frontmatter

  return (
    <HomePageTemplate
      welcomeText={welcomeText}
      bestSellers={Object.values(bestSellers)}
      books={books}
      heroData={heroData}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        welcomeText
        bestSellers {
          bestSeller1
          bestSeller2
          bestSeller3
          bestSeller4
          bestSeller5
        }
      }
    }
    heroData: markdownRemark(frontmatter: {bookId: {eq: "good-girls"}}) {
      frontmatter {
        coverImage {
          childImageSharp {
            fluid(maxWidth: 276) {
              ...GatsbyImageSharpFluid
            }
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
            coverImage {
              childImageSharp {
                fixed(width: 125, height: 192) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            coverSketchImage {
              childImageSharp {
                fixed(width: 117, height: 165) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
