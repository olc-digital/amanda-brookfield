import React from 'react'
import styled from 'styled-components'
import Img from '../PreviewCompatibleImage'

import Link from '../atoms/Link'
import Container from '../atoms/Container'
import RobotoCapsTitle from '../atoms/RobotoCapsTitle'
import H2 from '../atoms/H2'
import P from '../atoms/P'
import BuyNowButton from '../atoms/BuyNowButton'
// import goodGirlsTop from '../../img/good-girls-top.png'

import {hideBelowMobile} from '../../styles/mixins'
import media from '../../styles/mediaQueries'

const HeroSection = styled.section`
  background: ${({theme}) => theme.blue};
  color: #ffffff;
  position: relative;
  ${media.belowMobile`
    &::before {
      content: '';
      ${({isVideo, background}) => {
        if (!isVideo) {
          return `background-image: url(${background});`
        }
      }}
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
  ${hideBelowMobile}
`

const VideoHolder = styled.div`
  position: relative;
  margin-bottom: 24px;

  img {
    display: block;
    width: 100%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100% !important;
  }
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

export default function GoodGirlsHero({
  title,
  text,
  readMoreText,
  readMorePath,
  prefix,
  video,
  buyUrl,
  coverImage,
}) {
  const {srcSet, path} = previewCompatibleImage(coverImage) || {}
  const background = getSrcFromSrcSet(srcSet, 500) || path

  if (video) {
    return (
      <HeroSection background={background} isVideo={!!video}>
        <div style={{maxWidth: 792, margin: '0 auto', padding: '0 24px'}}>
          <MainSection>
            <RobotoCapsTitle>{prefix}</RobotoCapsTitle>
            <H2 css={'text-align: left; margin: 20px 0 16px !important;'}>
              {title}
            </H2>
            <BlurbBody>{text}</BlurbBody>
            <VideoHolder>
              <img src="data:image/png;base64,R0lGODlhEAAJAIAAAP///wAAACwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==" />
              <iframe
                src={`https://www.youtube.com/embed/${video}`}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{width: '100%', height: 'auto'}}
              />
            </VideoHolder>
          </MainSection>
        </div>
      </HeroSection>
    )
  }

  return (
    <HeroSection background={background}>
      <HeroContainer>
        <MainSection>
          <RobotoCapsTitle>{prefix}</RobotoCapsTitle>
          <H2 css={'text-align: left; margin: 20px 0 16px !important;'}>
            {title}
          </H2>
          <BlurbBody>{text}</BlurbBody>
          <BuyNowButton styleType="blue" href={buyUrl} size="md" />
          <ReadMoreLink to={readMorePath}>{readMoreText}</ReadMoreLink>
        </MainSection>
        <ImgHolder>
          {/* DONT DOWNLOAD THIS IMAGE ON MOBILE? */}
          <Img imageInfo={coverImage} />
        </ImgHolder>
      </HeroContainer>
    </HeroSection>
  )
}
