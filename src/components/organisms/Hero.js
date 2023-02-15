import React from 'react'
import styled from 'styled-components'
import Img from '../PreviewCompatibleImage'

import Link from '../atoms/Link'
import Container from '../atoms/Container'
import RobotoCapsTitle from '../atoms/RobotoCapsTitle'
import H2 from '../atoms/H2'
import BuyNowButton from '../atoms/BuyNowButton'
// import goodGirlsTop from '../../img/good-girls-top.png'

import media from '../../styles/mediaQueries'
import {FirstLetter} from '../../templates/home-page'
import H3 from '../atoms/H3'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

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
  letter-spacing: 1px;
  text-align: center;
  color: #5e5eca !important;
  font-weight: 600;
  text-decoration: none;
  padding: 15px 0;
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

const Actions = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  margin: -22px;

  & > * {
    padding: 22px;
  }
`

const MediaWrapper = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 30px;
  border-radius: 12px;
  max-width: calc(486px + 60px);
  margin: 45px auto 0;

  ${media.belowMobile`
    padding: 15px;
    margin-left: -15px;
    margin-right: -15px;
  `}
`

const MediaTitle = styled(H3)`
  position: absolute;
  top: -12px;
  margin: 0;
  left: 50%;
  letter-spacing: 1px;
  transform: translateX(-50%);
  background-color: #eeeef3;
  padding: 6px 12px 3px;
  line-height: 1;
  border-radius: 20px;
`

const MediaInner = styled.div`
  display: flex;
  justify-content: center;
  margin: -10px;

  > * {
    padding: 10px;
  }

  a {
    width: 100%;
    position: relative;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: invert(1) drop-shadow(0px 0px 15px black);
    opacity: 0.8;
    width: auto;
    height: 48px;

    ${media.belowMobile`
      height: 40px;
    `}
  }

  a:hover svg {
    opacity: 1;
  }
`

const MediaImage = styled.div`
  position: relative;
  display: block;
  height: 0;
  overflow: hidden;
  padding-bottom: 54%;
  background-image: ${props => props.backgroundImage};
  background-size: cover;
  background-position: center;
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
  text,
  readMoreText,
  prefix,
  video,
  buyUrl,
  image,
  link,
  linkText,
  newReleases,
  youtubeVideo1,
  youtubeVideo2,
}) {
  const {srcSet, path} = previewCompatibleImage(coverImage) || {}
  const background = getSrcFromSrcSet(srcSet, 500) || path

  const mediaItems = [youtubeVideo1, youtubeVideo2]
    .filter(Boolean)
    .map(mItem => ({
      thumbnail: `https://img.youtube.com/vi/${
        mItem.split('v=')[1].split('&')[0]
      }/hqdefault.jpg`,
      url: mItem,
    }))

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
          <H2 style={{ color: 'rgb(94, 94, 202)' }}>{prefix}</H2>
          {newReleases.map(({ title, amazonLink, coverImage }) => (
            <>
              <ImgHolder>
                <Img imageInfo={image || coverImage} />
              </ImgHolder>
              <BlurbBody>
                <H3>{title}</H3>
                <p>
                  <FirstLetter
                    style={{ transform: 'translateX(0)', paddingRight: '8px' }}
                  >
                    N
                  </FirstLetter>
                  ewly divorced twenty years after a passionate courtship and
                  marriage, Esther&apos;s and Lucas&apos;s lives are veering off
                  course, as are the inner worlds of their two grown-up children.
                  But can a family ever really be sliced in two?
                </p>
                <p>Publication: 10 August 2022</p>
              </BlurbBody>
              <Actions>
                {readMoreText && (
                  <div>
                    <ReadMoreLink to={readMorePath}>{readMoreText}</ReadMoreLink>
                  </div>
                )}
                <div>
                  <BlueButton
                    styleType="blue"
                    href={amazonLink}
                    text={linkText}
                    size="md"
                  />
                </div>
              </Actions>
            </>
          ))}
          <MediaWrapper>
            <MediaTitle>Video Clips</MediaTitle>
            <FontAwesomeIcon icon="play" />
            <MediaInner>
              {mediaItems.map(({thumbnail, url}, index) => (
                <a key={index} href={url} target="_blank" rel="noreferrer">
                  <MediaImage backgroundImage={`url(${thumbnail})`} />
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-labelledby="videoIconTitle"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    fill="none"
                    color="#000000"
                  >
                    <polygon points="18 12 9 16.9 9 7" />{' '}
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </MediaInner>
          </MediaWrapper>
        </MainSection>
      </HeroContainer>
    </HeroSection>
  )
}
