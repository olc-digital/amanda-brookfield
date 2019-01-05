import React from 'react'
import styled from 'styled-components'

import Container from '../atoms/Container'

const RedBackground = styled.div`
  background: ${({theme}) => theme.orange};
`

export default function ForTheLoveOfADogHero() {
  return (
    <RedBackground>
      <Container>NEW</Container>
    </RedBackground>
  )
}
