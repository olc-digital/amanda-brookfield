import React from 'react'
import styled from 'styled-components'

import Link from '../atoms/Link'
import Container from '../atoms/Container'
import H2 from '../atoms/H2'
import P from '../atoms/P'
import Img from '../atoms/Img'
import BuyNowButton from '../atoms/BuyNowButton'
import RobotoCapsTitle from '../atoms/RobotoCapsTitle'
import media from '../../styles/mediaQueries'
import {books} from '../../data'

import amandaWithMabel from '../../img/amanda-with-mabel.png'
import amandaWithMabel2x from '../../img/amanda-with-mabel@2x.png'
import amandaWithMabel3x from '../../img/amanda-with-mabel@3x.png'
import MabelGallery from './MabelGallery'

const ftloadData = books['for-the-love-of-a-dog']

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
  color: #ffffff !important;
  text-decoration: none;
  width: 152px;
  padding: 10px 5px;
  margin: 16px 0 32px;
  ${media.aboveContainer`
    margin-bottom: 0;
  `}
  &:hover {
    color: inherit;
    text-decoration: underline;
  }
`

export default function ForTheLoveOfADogHero() {
  return (
    <HeroSection>
      <HeroContainer>
        <MainSection>
          <RobotoCapsTitle>NEW</RobotoCapsTitle>
          <H2 css={'text-align: left; margin-bottom: 16px;'}>
            A memoir, ‘For the Love of a Dog’
          </H2>
          <AmandaImage />
          <BlurbBody>
            {`For the Love of a Dog is a poignant and often hilarious examination of how a zest for life can re-emerge from the rubble of loss.  Amanda teases out the truths at the heart of life's pitfalls, throwing light on the big issues that face us all.`}
          </BlurbBody>
          <BuyNowButton
            styleType="orange"
            bookId="for-the-love-of-a-dog"
            size="md"
          />
          <ReadMoreLink to={ftloadData.link}>
            Read Amanda & Mabel’s Story
          </ReadMoreLink>
        </MainSection>
        <GallerySection>
          <MabelGallery />
        </GallerySection>
      </HeroContainer>
    </HeroSection>
  )
}
