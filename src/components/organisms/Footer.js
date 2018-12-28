import React from 'react'
import styled from 'styled-components'

import Sketch from '../atoms/Sketch'
import PrimaryButton from '../atoms/PrimaryButton'
import H2 from '../atoms/H2'

const FooterWrapper = styled.div`
  background-color: #eff1f3;
  padding: 32px 0;
  display: grid;
  justify-items: center;
`

const ContactHeading = styled(H2)``

export default function Footer() {
  return (
    <FooterWrapper>
      <Sketch type="author" />
      <ContactHeading>Contact</ContactHeading>
      <PrimaryButton>Email Amanda</PrimaryButton>
    </FooterWrapper>
  )
}
