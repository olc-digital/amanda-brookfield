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
import FullWidth from '../atoms/FullWidth'
import {FirstLetter} from '../../templates/home-page'

const HeroSection = styled.section`
  background: rgb(226, 226, 236);
  color: black;
  position: relative;
  border-radius: 5px;
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
  padding: 72px 0px;
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

const BlurbBody = styled.div`
  font-size: 15px;
  max-width: 486px;
  margin: 20px auto;
  position: relative;
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
  width: 100%;
  flex: 1 0 auto;
  align-self: center;
  max-width: 486px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
}
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

const BlueButton = styled(BuyNowButton)`
  svg path {
    fill: rgb(94, 94, 202);
    stroke: inherit;
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
  image,
  link,
  linkText,
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
          <H2 style={{color: 'rgb(94, 94, 202)'}}>{prefix}</H2>
          <ImgHolder>
            <Img imageInfo={image || coverImage} />
          </ImgHolder>
          <BlurbBody>
            <p>
              <FirstLetter
                style={{transform: 'translateX(0)', paddingRight: '8px'}}
              >
                N
              </FirstLetter>
              ewly divorced twenty years after a passionate courtship and
              marriage, Esther&apos;s and Lucas&apos;s lives are veering off
              course, as are the inner worlds of their two grown-up children.
              But can a family ever really be sliced in two?
            </p>
            <p>
              <strong>
                Is it better to have “someone” than no one?
                <br />
                Do love-stories ever end?
                <br />
                Who owns the truth in a relationship?
              </strong>
            </p>
            <p>Publication:10 August 2022</p>
          </BlurbBody>
          <BlueButton
            styleType="blue"
            href={link || buyUrl}
            text={linkText}
            size="md"
            style={{margin: '0 auto'}}
          />
          {/* {readMoreText && (
                <ReadMoreLink to={readMorePath}>{readMoreText}</ReadMoreLink>
              )} */}
        </MainSection>
      </HeroContainer>
    </HeroSection>
  )
}
