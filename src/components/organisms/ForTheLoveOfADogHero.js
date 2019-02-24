import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import Container from '../atoms/Container'
import H2 from '../atoms/H2'
import P from '../atoms/P'
import Img from '../atoms/Img'
import SketchButton from '../atoms/SketchButton'
import media from '../../styles/mediaQueries'

import amandaWithMabel from '../../img/amanda-with-mabel.png'
import amandaWithMabel2x from '../../img/amanda-with-mabel@2x.png'
import amandaWithMabel3x from '../../img/amanda-with-mabel@3x.png'
import MabelGallery from './MabelGallery'

const HeroSection = styled.section`
  background: ${({theme}) => theme.orange};
  color: #ffffff;
`

const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.aboveContainer`
    flex-direction: row;
  `}
`

const MainSection = styled.div`
  flex: 1 0 auto;
  align-self: center;
  position: relative;
  padding-top: 24px;
  max-width: 434px;
  width: 100%;
  ${media.aboveContainer`
    align-self: auto;
  `}
  &:after {
    clear: both;
    content: '';
    display: table;
  }
`
const GallerySection = styled.div`
  ${media.aboveContainer`
    margin-left: 44px;
  `}
`
const AllCapsTitle = styled.h2`
  letter-spacing: 0.9px;
  font-size: 18px;
  margin-bottom: 16px;
`

const BlurbBody = styled(P)`
  font-size: 14px;
  padding-right: 150px;
  margin-bottom: 24px;
  position: relative;
  @media (max-width: 380px) {
    padding: 0;
  }
`

const AmandaImage = styled(Img).attrs({
  alt: 'Amanda walking Mabel',
  srcSet: [amandaWithMabel, amandaWithMabel2x, amandaWithMabel3x],
})`
  float: right;
  shape-outside: url(${({srcSet}) => srcSet[0]});
  shape-image-threshold: 0;
  position: absolute;
  bottom: 0;
  right: 0;
`

const ReadMoreLink = styled(Link)`
  display: block;
  position: relative;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  width: 152px;
  padding: 10px 5px;
  margin: 16px 0 32px;
  ${media.aboveContainer`
    margin-bottom: 0;
  `}
  &:hover {
    text-decoration: underline;
  }
`

export default function ForTheLoveOfADogHero() {
  return (
    <HeroSection>
      <HeroContainer>
        <MainSection>
          <AllCapsTitle>NEW</AllCapsTitle>
          <H2 css={'text-align: left; margin-bottom: 16px;'}>
            A memoir, ‘For the Love of a Dog’
          </H2>
          <AmandaImage />
          <BlurbBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </BlurbBody>
          <SketchButton type="orange" uppercase size="md">
            Buy Now
          </SketchButton>
          <ReadMoreLink>Read Amanda & Mabel’s Story</ReadMoreLink>
        </MainSection>
        <GallerySection>
          <MabelGallery />
        </GallerySection>
      </HeroContainer>
    </HeroSection>
  )
}
