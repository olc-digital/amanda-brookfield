import React from 'react'
import styled from 'styled-components'

import Container from '../atoms/Container'
import H2 from '../atoms/H2'

const HeroSection = styled.section`
  background: ${({theme}) => theme.orange};
  padding-top: 24px;
  color: white;
`
const AllCapsTitle = styled.h2`
  letter-spacing: 0.9px;
  font-size: 18px;
`

export default function ForTheLoveOfADogHero() {
  return (
    <HeroSection>
      <Container>
        <AllCapsTitle>NEW</AllCapsTitle>
        <H2 css={'text-align: left'}>A memoir, ‘For the Love of a Dog’</H2>
      </Container>
    </HeroSection>
  )
}
