import React from 'react'
import styled from 'styled-components'

import Sketch from '../atoms/Sketch'
import SketchButton from '../atoms/SketchButton'
import H2 from '../atoms/H2'
import Img from '../atoms/Img'
import ExternalLink from '../atoms/ExternalLink'

import instaIcon from '../../img/insta-icon.png'
import facebookIcon from '../../img/facebook-icon.png'
import twitterIcon from '../../img/twitter-icon.png'

const FooterWrapper = styled.div`
  background-color: #eff1f3;
  padding: 32px 0;
  display: grid;
  grid-gap: 32px;
  justify-items: center;
`

const ContactHeading = styled(H2)``

const SocialMediaLinks = styled.div``

export default function Footer() {
  return (
    <FooterWrapper>
      <Sketch type="author" />
      <ContactHeading>Contact</ContactHeading>
      <SketchButton width="wide">Email Amanda</SketchButton>
      <SocialMediaLinks>
        <ExternalLink href="https://www.instagram.com/amanda_and_mabel_brookfield/">
          <Img src={instaIcon} />
        </ExternalLink>
        <ExternalLink href="https://www.facebook.com/amandabrookfield100/">
          <Img src={facebookIcon} />
        </ExternalLink>
        <ExternalLink href="https://twitter.com/ABrookfield1">
          <Img src={twitterIcon} />
        </ExternalLink>
      </SocialMediaLinks>
    </FooterWrapper>
  )
}
