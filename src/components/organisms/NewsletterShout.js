import React from 'react'
import styled from 'styled-components'
import SketchButton from '../atoms/SketchButton'
import Container from '../atoms/Container'
import {crimsonTextFont} from '../../styles/mixins'
import useNewsletterSignup from '../../hooks/useNewsletterSignup'

import newsletterIcon from '../../img/newsletter.svg'
import media from '../../styles/mediaQueries'

// cool blue - rgba(20, 90, 156, 0.76);
// awesome purple - rgba(64, 20, 156, 0.66);
// sick green - rgba(20, 156, 61, 0.8);
// epic yellow - rgba(251, 196, 33, 0.85);
// blazing red - rgb(186, 57, 57);

const NewsletterShoutWrapper = styled.div`
  position: relative;
  background-color: #8164be;
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
  max-width: 616px;
  margin: -48px auto 66px;

  .newsletter-shout__cta {
    margin: 0 12px;
    width: auto;
    font-size: 16px;
    padding: 0 23px;

    & > * {
      color: #333;
    }

    path {
      stroke: #fff;
      fill: #fff;
    }
  }

  &.large {
    padding: 32px;
    justify-content: space-around;
    max-width: none;
    margin: 0 auto 66px;
  }

  ${media.belowMobile`
    display: none;
  `}
`

const NewsletterShoutHeading = styled.h3`
  position: relative;
  ${crimsonTextFont}
  text-align: left;
  color: #fff;
  margin: 0 12px;
  font-size: 20px;
  z-index: 1;
  top: 2px;
`

const NewsletterShoutIcon = styled.div`
  position: absolute;
  background-image: url(${newsletterIcon});
  background-size: auto 63%;
  width: 100%;
  left: 0;
  height: 100%;
  background-position: 5% center;
  opacity: 0.3;
  z-index: 0;
`

const NewsletterShout = ({large = false}) => {
  const {openSignupModal} = useNewsletterSignup()

  return (
    <Container>
      <NewsletterShoutWrapper className={large ? 'large' : ''}>
        <NewsletterShoutIcon />
        <NewsletterShoutHeading>
          Did you know, I have a Newsletter?
        </NewsletterShoutHeading>
        <SketchButton
          className="newsletter-shout__cta"
          as="a"
          size="xl"
          onClick={() => {
            openSignupModal()
          }}
        >
          Subscribe
        </SketchButton>
      </NewsletterShoutWrapper>
    </Container>
  )
}

export default NewsletterShout
