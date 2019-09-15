import React from 'react'
import styled from 'styled-components'

import Link from '../atoms/Link'
import Container from '../atoms/Container'
import RobotoCapsTitle from '../atoms/RobotoCapsTitle'
import H2 from '../atoms/H2'
import P from '../atoms/P'
import Img from '../atoms/Img'
import BuyNowButton from '../atoms/BuyNowButton'
import goodGirls from '../../img/good-girls.jpg'
import goodGirlsTop from '../../img/good-girls-top.png'

import {hideBelowMobile} from '../../styles/mixins'
import media from '../../styles/mediaQueries'

const HeroSection = styled.section`
  background: ${({theme}) => theme.blue};
  color: #ffffff;
  position: relative;
  ${media.belowMobile`
    &::before {
      content: '';
      background-image: url(${goodGirlsTop});
      background-size: cover;
      opacity: 0.3;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
    }`}
`

const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.aboveMobile`
    flex-direction: row;
  `}
`

const MainSection = styled.div`
  position: relative;
  padding-top: 24px;
  width: 100%;
  ${media.aboveMobile`
    align-self: auto;
  `}
  &:after {
    clear: both;
    content: '';
    display: table;
  }
`

const BlurbBody = styled(P)`
  font-size: 14px;
  padding-right: 40px;
  margin-bottom: 48px;
  position: relative;
  /* @media (max-width: 380px) {
    padding: 0;
  } */
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
  width: 166px;
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

const ImgHolder = styled.div`
  width: 276px;
  flex: 1 0 auto;
  align-self: center;
  ${hideBelowMobile}
`

export default function GoodGirlsHero({pagePath, buyUrl}) {
  return (
    <HeroSection>
      <HeroContainer>
        <MainSection>
          <RobotoCapsTitle>NEW</RobotoCapsTitle>
          <H2 css={'text-align: left; margin: 20px 0 16px;'}>
            A novel, ‘Good Girls‘
          </H2>
          <BlurbBody>
            {`Good Girls is about the Keating sisters, Kat and Eleanor, and the turns their lives take after a childhood fraught with difficulties and adolescent rivalries.  It is a coming-of-age story, a mystery and a tear-jerker. But most of all it’s a reminder of whom to keep close and whom to trust with your darkest secrets. `}
          </BlurbBody>
          <BuyNowButton styleType="blue" href={buyUrl} size="md" />
          <ReadMoreLink to={pagePath}>Read more about Good Girls</ReadMoreLink>
        </MainSection>
        <ImgHolder>
          {/* DONT DOWNLOAD THIS IMAGE ON MOBILE? */}
          <Img css={'display: block'} src={goodGirls} />
        </ImgHolder>
      </HeroContainer>
    </HeroSection>
  )
}
