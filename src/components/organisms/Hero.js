import React from 'react'
import styled from 'styled-components'
import Img from '../PreviewCompatibleImage'
import Container from '../atoms/Container'
import media from '../../styles/mediaQueries'
import {Helmet} from 'react-helmet'

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

export default function Hero({text, videoId, image}) {
  return (
    <HeroSection>
      <HeroContainer>
        <MainSection>{text}</MainSection>
        <ImgHolder>
          {videoId && (
            <>
              <Helmet>
                <script
                  id="vooplayer"
                  src="https://amandabrookfield.cdn.spotlightr.com/assets/vooplayer.js"
                ></script>
              </Helmet>
              <iframe
                allow="autoplay"
                className="video-player-container vooplayer"
                data-playerid={videoId}
                allowtransparency="true"
                style={{maxWidth: `100%`}}
                name="vooplayerframe"
                allowFullScreen={true}
                src=""
                watch-type=""
                url-params=""
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </>
          )}
          {image && <Img imageInfo={coverImage} />}
        </ImgHolder>
      </HeroContainer>
    </HeroSection>
  )
}
