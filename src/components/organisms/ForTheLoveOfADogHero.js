import React from 'react'
import styled from 'styled-components'

import Container from '../atoms/Container'
import H2 from '../atoms/H2'
import Img from '../atoms/Img'

import amandaWithMabel from '../../img/amanda-with-mabel.png'
import amandaWithMabel2x from '../../img/amanda-with-mabel@2x.png'
import amandaWithMabel3x from '../../img/amanda-with-mabel@3x.png'

const HeroSection = styled.section`
  background: ${({theme}) => theme.orange};
  padding-top: 24px;
  color: #ffffff;
`
const AllCapsTitle = styled.h2`
  letter-spacing: 0.9px;
  font-size: 18px;
`

const BlurbBody = styled.p`
  font-size: 14px;
  line-height: 1.86;
`

const AmandaImage = styled(Img).attrs({})``

export default function ForTheLoveOfADogHero() {
  return (
    <HeroSection>
      <Container>
        <AllCapsTitle>NEW</AllCapsTitle>
        <H2 css={'text-align: left'}>A memoir, ‘For the Love of a Dog’</H2>
        <BlurbBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </BlurbBody>
        <AmandaImage
          alt="Amanda walking Mabel"
          srcSet={[amandaWithMabel, amandaWithMabel2x, amandaWithMabel3x]}
        />
      </Container>
    </HeroSection>
  )
}
