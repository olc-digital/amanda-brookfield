import React from 'react'
import styled from 'styled-components'

import Img from '../atoms/Img'
import SketchButton from '../atoms/SketchButton'
import H2 from '../atoms/H2'
import ExternalLink from '../atoms/ExternalLink'
import Icon from '../atoms/Icon'

import contactImg from '../../img/contact.gif'

import emailIcon from '../../img/email-icon.svg'

const FooterWrapper = styled.div`
  background-color: #eff1f3;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContactHeading = styled(H2)`
  margin: 32px 0;
`

const SocialMediaLinks = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: center;
  img {
    width: 44px;
    margin: 0 8px;
  }
`

const Copyright = styled.div`
  font-size: 12px;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <Img css={'width: 75px;'} src={contactImg} />
      <ContactHeading>Contact</ContactHeading>
      <SketchButton
        as="a"
        href="mailto:contact@amandabrookfield.co.uk"
        size="xl"
        uppercase
      >
        <Img src={emailIcon} css={'margin-right: 10px;'} />
        Email Amanda
      </SketchButton>
      <SocialMediaLinks>
        <ExternalLink href="https://www.instagram.com/amanda_and_mabel_brookfield/">
          <Icon name="insta" />
        </ExternalLink>
        <ExternalLink href="https://www.facebook.com/amandabrookfield100/">
          <Icon name="facebook" />
        </ExternalLink>
        <ExternalLink href="https://twitter.com/ABrookfield1">
          <Icon name="twitter" />
        </ExternalLink>
      </SocialMediaLinks>
      <Copyright>&copy; Amanda Brookfield 2018</Copyright>
    </FooterWrapper>
  )
}
