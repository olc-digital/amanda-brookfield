import React, {useContext} from 'react'
import styled from 'styled-components'
import SketchButton from '../atoms/SketchButton'
import Container from '../atoms/Container'
import {crimsonTextFont} from '../../styles/mixins'
import ModalContext from '../../providers/Modal'

import newsletterIcon from '../../img/newsletter.svg'

// cool blue - rgba(20, 90, 156, 0.76);

const NewsletterShoutWrapper = styled.div`
  position: relative;
  margin: 66px auto;
  background-color: rgba(64, 20, 156, 0.66);
  display: flex;
  align-items: center;
  padding: 32px;
  justify-content: space-around;

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
  background-size: 90px auto;
  width: 100%;
  left: 0;
  height: 100%;
  background-position: 32px center;
  opacity: 0.3;
  z-index: 0;
`

const Iframe = styled.iframe`
  outline: 'none',
  border: 'none',
  margin: -12,
  width: 'calc(100% + 24px)',
  height: 'calc(100% + 24px)',
`

const NewsletterShout = () => {
  const {openModal} = useContext(ModalContext)

  return (
    <Container>
      <NewsletterShoutWrapper>
        <NewsletterShoutIcon />
        <NewsletterShoutHeading>
          Did you know, I have a Newsletter?
        </NewsletterShoutHeading>
        <SketchButton
          className="newsletter-shout__cta"
          as="a"
          size="xl"
          onClick={() => {
            openModal(
              <Iframe
                style={{
                  outline: 'none',
                  border: 'none',
                  margin: -12,
                  width: 'calc(100% + 24px)',
                  height: 'calc(100% + 24px)',
                }}
                src="http://bit.ly/AmandaBrookfieldNewsletter"
              />,
            )
          }}
        >
          Subscribe
        </SketchButton>
      </NewsletterShoutWrapper>
    </Container>
  )
}

export default NewsletterShout
