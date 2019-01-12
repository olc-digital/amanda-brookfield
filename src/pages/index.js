import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Responsive from '../components/atoms/Responsive'
import Img from '../components/atoms/Img'
import H2 from '../components/atoms/H2'
import Container from '../components/atoms/Container'
import BookWidget from '../components/molecules/BookWidget'
import ForTheLoveOfADogHero from '../components/organisms/ForTheLoveOfADogHero'
import bannerMobile1x from '../img/home-banner-mobile.jpg'
import bannerMobile2x from '../img/home-banner-mobile@2x.jpg'
import bannerMobile3x from '../img/home-banner-mobile@3x.jpg'
import bannerDesktop1x from '../img/home-banner-desktop.jpg'
import bannerDesktop2x from '../img/home-banner-desktop@2x.jpg'
import bannerDesktop3x from '../img/home-banner-desktop@3x.jpg'
import {CrimsonTextFont} from '../styles/mixins'
import {books} from '../data'
import FullWidth from '../components/atoms/FullWidth'

import media from '../styles/mediaQueries'

const BannerImage = styled(Img)`
  width: 100%;
  height: auto;
`
const WelcomeText = styled.div`
  max-width: 486px;
  width: 100%;
  margin: 48px auto 0;
  text-align: center;
  line-height: 1.86;
`
const FirstLetter = styled.span`
  ${CrimsonTextFont}
  font-weight: normal;
  float: left;
  font-size: 48px;
  line-height: 48px;
  ${media.aboveMobile`
    transform: translateX(8px);
  `}
`

const HomeH2 = styled(H2)`
  margin: 72px 0;
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
      <>
        <Container>
          <FullWidth>
            <Responsive.Mobile>
              {matches =>
                matches ? (
                  <BannerImage
                    srcSet={[bannerMobile1x, bannerMobile2x, bannerMobile3x]}
                  />
                ) : (
                  <BannerImage
                    srcSet={[bannerDesktop1x, bannerDesktop2x, bannerDesktop3x]}
                  />
                )
              }
            </Responsive.Mobile>
          </FullWidth>
          <WelcomeText>
            <FirstLetter>W</FirstLetter>elcome to my official website. There’s
            lots to dip into, with sneak-peeks at my inspirations as well as
            information about all my fifteen best-sellers, including Alice
            Alone, Relative Love and Life Begins.
          </WelcomeText>
          <HomeH2>My Best Sellers</HomeH2>
          <Scroller>
            <SelectedBooks>
              {selectedBooks.map(book => (
                <BookWidget key={book.id} {...book} />
              ))}
            </SelectedBooks>
          </Scroller>
        </Container>
        <ForTheLoveOfADogHero />
      </>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}
