import React from 'react'
import styled from 'styled-components'
import Img from '../PreviewCompatibleImage'

import Link from '../atoms/Link'
import Container from '../atoms/Container'
import RobotoCapsTitle from '../atoms/RobotoCapsTitle'
import H2 from '../atoms/H2'
import P from '../atoms/P'
import BuyNowButton from '../atoms/BuyNowButton'

import {hideBelowMobile} from '../../styles/mixins'
import media from '../../styles/mediaQueries'

const HeroSection = styled.section`
  background: ${({theme}) => theme.blue};
  color: #ffffff;
  position: relative;
`

const HeroContainer = styled(Container)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;

  ${media.aboveMobile`
    flex-direction: row;
  `}
`

const MainSection = styled.div`
  position: relative;
  padding: 24px 0;
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
  margin-bottom: 48px;
  position: relative;
  ${media.aboveMobile`
    padding-right: 40px;
  `}
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
  ${media.belowMobile`
    position: absolute;
    width: 124px;
    bottom: 24px;
    right: 24px;
    max-width: 33%;
  `}
`

const previewCompatibleImage = imageInfo => {
  if (!imageInfo) {
    return null
  }

  const {childImageSharp, path} = imageInfo

  if (childImageSharp && childImageSharp.fluid) {
    return childImageSharp.fluid
  }

  if (childImageSharp && childImageSharp.fixed) {
    return childImageSharp.fixed
  }

  if (path && typeof path === 'string') {
    return {path}
  }

  return null
}

const getSrcFromSrcSet = (srcSet, minWidth = 500) => {
  if (!srcSet) {
    return null
  }
  // Make this compatible with the CMS preview
  // Crop the image using css or some other way
  try {
    const items = srcSet.split(',').map(background => {
      const splitPosition = background.lastIndexOf(' ')
      return {
        src: background.slice(0, splitPosition),
        width: Number(background.slice(splitPosition + 1, -1)) || 0, // to just get the number without the w
      }
    })

    const {src = ''} = items.find(v => v.width > minWidth) || items.pop()

    return src
  } catch (err) {
    return ''
  }
}

export default function TheOtherWomanHero({
  readMoreText,
  readMorePath,
  buyUrl,
  coverImage,
}) {
  const {srcSet, path} = previewCompatibleImage(coverImage) || {}
  const background = getSrcFromSrcSet(srcSet, 500) || path

  return (
    <HeroSection background={background}>
      <HeroContainer>
        <MainSection>
          <RobotoCapsTitle>NEW</RobotoCapsTitle>
          <H2 css={'text-align: left; margin: 20px 0 16px !important;'}>
            A novel, &lsquo;The Other Woman&rsquo;
          </H2>
          <BlurbBody>
            Published on October 13 th 2020, ‘The Other Woman’ is a crackling
            story about love, marriage, lies and fate, showing how our destinies
            turn on the smallest connections and decisions.
          </BlurbBody>
          <BuyNowButton styleType="blue" href={buyUrl} size="md" />
          <ReadMoreLink to="/books/the-other-woman">
            READ MORE ABOUT THE OTHER WOMAN
          </ReadMoreLink>
        </MainSection>
        <ImgHolder>
          {/* DONT DOWNLOAD THIS IMAGE ON MOBILE? */}
          <Img imageInfo={coverImage} />
        </ImgHolder>
      </HeroContainer>
    </HeroSection>
  )
}
