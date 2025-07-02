import React, { Fragment } from 'react'
import styled from 'styled-components'
import Img from '../PreviewCompatibleImage'

import Link from '../atoms/Link'
import Container from '../atoms/Container'
import H2 from '../atoms/H2'
import BuyNowButton from '../atoms/BuyNowButton'

import media from '../../styles/mediaQueries'
import H3 from '../atoms/H3'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const HeroSection = styled.section`
  background: rgb(226, 226, 236);
  color: black;
  position: relative;

  ${media.aboveMobile`
    border-radius: 64px;
    border: 20px solid rgb(219, 219, 235);
  `}
`

const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.aboveMobile`
    flex-direction: row;
    padding: 0 48px;
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
  text-align: center;

  ${media.aboveContainer`
    font-size: 16px;
    line-height: 1.45;
    margin: 0;
    text-align: left;
  `}
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
  width: calc(75vw - 48px);
  height: calc(75vw - 48px);
  flex: 1 0 auto;
  align-self: center;
  max-width: 226px;
  max-height: 226px;
  margin: 20px auto;
  border-radius: 6px;
  overflow: hidden;
  line-height: 0;

  ${media.aboveContainer`
    margin: 0;
  `}
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
  margin-top: 0;

  & > * {
    padding: 22px;
  }

  ${media.aboveContainer`
    justify-content: flex-end;
  `}
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
    opacity: 0.7;
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

const Divider = styled.div`
  width: 75%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 60px auto;
`

const PromoItem = styled.div`

  ${media.aboveContainer`
    display: flex;
    gap: 30px;
    align-items: center;
    margin: 45px 0;

    &:nth-child(even of &) {
      flex-direction: row-reverse;
    }
  `}
`



export default function Hero({
  prefix,
  books,
  bookIntros,
  videos
}) {
  const mediaItems = videos
    .filter(Boolean)
    .map(mItem => ({
      thumbnail: `https://img.youtube.com/vi/${
        mItem.split('v=')[1].split('&')[0]
      }/hqdefault.jpg`,
      url: mItem,
    }))

  // if (video) {
  //   return (
  //     <HeroSection background={background} isVideo={!!video}>
  //       <div style={{maxWidth: 792, margin: '0 auto', padding: '0 24px'}}>
  //         <MainSection>
  //           <RobotoCapsTitle>{prefix}</RobotoCapsTitle>
  //           <H2 css={'text-align: left; margin: 20px 0 16px !important;'}>
  //             {title}
  //           </H2>
  //           <BlurbBody>{text}</BlurbBody>
  //           <VideoHolder>
  //             <img src="data:image/png;base64,R0lGODlhEAAJAIAAAP///wAAACwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==" />
  //             <iframe
  //               src={`https://www.youtube.com/embed/${video}`}
  //               frameBorder="0"
  //               allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //               allowFullScreen
  //               style={{width: '100%', height: 'auto'}}
  //             />
  //           </VideoHolder>
  //         </MainSection>
  //       </div>
  //     </HeroSection>
  //   )
  // }

  return (
    <HeroSection>
      <HeroContainer>
        <MainSection>
          <H2 style={{ color: 'rgb(94, 94, 202)' }}>{prefix}</H2>
          {books?.map(({ title, amazonLink, coverImage, promoImage, path }, index) => (
            <Fragment key={index}>
              {index > 0 && <Divider />}
              <PromoItem key={index}>
                <ImgHolder>
                  <Img imageInfo={promoImage || coverImage} alt={title} />
                </ImgHolder>
                <BlurbBody>
                  {bookIntros?.[index] || <></>}
                  <Actions>
                    {path && (
                      <div>
                        <ReadMoreLink to={path}>Read more</ReadMoreLink>
                      </div>
                    )}
                    <div>
                      <BlueButton
                        styleType="blue"
                        href={amazonLink}
                        text="Buy now"
                        size="md"
                      />
                    </div>
                  </Actions>
                </BlurbBody>
              </PromoItem>
            </Fragment>
          ))}
          <MediaWrapper>
            <MediaTitle>Video Clips</MediaTitle>
            <FontAwesomeIcon icon="play" />
            <MediaInner>
              {mediaItems.map(({thumbnail, url}, index) => (
                <a key={index} href={url} target="_blank" rel="noreferrer">
                  <MediaImage backgroundImage={`url(${thumbnail})`} />
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" stroke="none" fill="FFFFFF" opacity="0" />
                    <g transform="matrix(0.83 0 0 0.83 12 12)">
                      <path transform="translate(-12, -12)" d="M 23.14 10.61 L 2.25 0.16 C 1.7663217178274575 -0.07853658252351811 1.1937449421366766 -0.0503347246239442 0.7358488008575956 0.23457842994970587 C 0.27795265957851467 0.519491584523356 -0.00030880732756832785 1.0207001886840523 0 1.5599999999999985 L 0 22.44 C -0.0003088073275680349 22.979299811315947 0.2779526595785151 23.480508415476645 0.7358488008575962 23.765421570050293 C 1.1937449421366773 24.050334724623944 1.7663217178274584 24.07853658252352 2.250000000000001 23.84 L 23.14 13.39 C 23.6691359352227 13.128912479969442 24.00414287202071 12.590043668773516 24.00414287202071 12 C 24.00414287202071 11.409956331226484 23.6691359352227 10.871087520030558 23.14 10.61 Z" strokeLinecap="round" />
                    </g>
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
