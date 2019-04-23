import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import H2 from '../components/atoms/H2'
import H3 from '../components/atoms/H3'
import Container from '../components/atoms/Container'
import BookWidget from '../components/molecules/BookWidget'
import ForTheLoveOfADogHero from '../components/organisms/ForTheLoveOfADogHero'
import bannerDesktop1x from '../img/home-banner-desktop.jpg'
import bannerDesktop2x from '../img/home-banner-desktop@2x.jpg'
import bannerDesktop3x from '../img/home-banner-desktop@3x.jpg'
import {crimsonTextFont, kalamFont} from '../styles/mixins'
import {books} from '../data'
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
  margin: 48px auto 0;
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
const SelectedBooks = styled.div`
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

const AnnouncementTitle = styled.span`
  ${kalamFont}
`

const selectedIds = [
  'relative-love',
  'a-family-man',
  'sisters-and-husbands',
  'life-begins',
  'the-lover',
]
const selectedBooks = Object.values(books).filter(({id}) =>
  selectedIds.includes(id),
)

export default class IndexPage extends React.Component {
  render() {
    return (
      <Page>
        <HelmetHelper
          title="Homepage"
          content="Meet me, Amanda Brookfield and my page - turning emotional bestselling novels. My latest, ‘For the Love of a Dog’, is a poignant, uplifting memoir about finding happiness after divorce. @ABrookfield1"
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
            <FirstLetter>W</FirstLetter>
            {`elcome to my official website. There’s
            lots to dip into, with sneak-peeks at my inspirations as well as
            information about all my sixteen best-sellers, including 'Alice
            Alone', 'Relative Love' and 'Life Begins'.
            `}
            {/* <div>I also share my thoughts and a few photos on social media</div>
            hi
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            <H3>The Big News</H3>
            <div>
              My latest book For The Love of a Dog will be published in
              paperback by Head of Zeus in May 2019. It is available now to buy,
              both in hardback and Kindle e-book.
            </div> */}
          </WelcomeText>
          {/* <div>
            <AnnouncementTitle>The Big News</AnnouncementTitle>
            <div>
              My latest book For The Love of a Dog will be published in
              paperback by Head of Zeus in May 2019. It is available now to buy,
              both in hardback and Kindle e-book.
            </div>
          </div> */}
          <MobileOnlySketch type="books" />
          <H2 margin>My Best-Sellers</H2>
          <Scroller>
            <SelectedBooks>
              {selectedBooks.map(book => (
                <BookWidget key={book.id} {...book} />
              ))}
            </SelectedBooks>
          </Scroller>
        </Container>
        <ForTheLoveOfADogHero />
        <Container>
          <MobileOnlySketch type="newspaper" />
          <H2 margin>Latest Releases</H2>
          <FeaturedBook bookId="for-the-love-of-a-dog">
            {`Published in November 2018, 'For the Love of a Dog' is a funny and
            poignant memoir of emotional meltdown and recovery with the
            unwitting aid of a Golden Doodle puppy called Mabel. Following the
            death of my mother and the end of a post-divorce relationship, my
            world fell apart and desolation closed in. Talk of getting a puppy
            was just to cheer myself up. I never thought I would actually go
            through with it; I was barely capable of looking after myself, let
            alone a dog…`}
          </FeaturedBook>
          <FeaturedBook bookId="the-love-child">
            {`Published in Jan 2013, 'The Love Child' is a touching and heartfelt
            story about discovering what matters most in your life and having
            the courage to reach for it - not just once, but again and again.`}
            <br />
            {`When Janine and Dougie fell in love they thought it would be for
            ever. Fifteen years later their relationship is well and truly over,
            their daughter Stevie their one remaining connection...`}
          </FeaturedBook>
          <FeaturedBook bookId="before-i-knew-you">
            {`Released in March 2011, 'Before I Knew You' tells the unsettling story
            of what happens when two very different families swap houses across
            the Atlantic one August. Strangers when they borrow each other's
            respective homes, their lives then start to intertwine in unexpected
            ways, throwing them at the mercy of their pasts and each other.`}
          </FeaturedBook>
        </Container>
      </Page>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}
