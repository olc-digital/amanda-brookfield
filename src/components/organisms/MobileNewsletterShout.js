import React from 'react'
import styled from 'styled-components'
import SketchButton from '../atoms/SketchButton'
import Container from '../atoms/Container'
import {crimsonTextFont} from '../../styles/mixins'
import useNewsletterSignup from '../../hooks/useNewsletterSignup'

import newsletterIcon from '../../img/newsletter.svg'

// cool blue - rgba(20, 90, 156, 0.76);
// awesome purple - rgba(64, 20, 156, 0.66);
// sick green - rgba(20, 156, 61, 0.8);
// epic yellow - rgba(251, 196, 33, 0.85);
// blazing red - rgb(186, 57, 57);

const NewsletterShoutWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  background-color: #8164be;
  display: flex;
  padding: 12px 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .newsletter-shout__cta {
    margin: 0 auto;
    width: auto;
    font-size: 16px;
    padding: 0 23px;
    transform: scale(0.9);

    & > * {
      color: #333;
    }

    path {
      stroke: #fff;
      fill: #fff;
    }
  }
`

const NewsletterShoutHeading = styled.h3`
  position: relative;
  ${crimsonTextFont}
  text-align: center;
  color: #fff;
  margin: 0 12px 8px;
  font-size: 120%;
  z-index: 1;
  top: 2px;
`

const NewsletterShoutIcon = styled.div`
  position: absolute;
  background-image: url(${newsletterIcon});
  background-size: auto 32%;
  width: 100%;
  left: 0;
  height: 100%;
  background-position: 5% center;
  opacity: 0.3;
  z-index: 0;
`

const MobileNewsletterShout = ({large = false}) => {
  const {openSignupModal} = useNewsletterSignup()

  return (
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
  )
}

export default MobileNewsletterShout
