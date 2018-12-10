import React from 'react'
import styled from 'styled-components'
import PrimaryFont from '../atoms/PrimaryFont'
import SecondaryFont from '../atoms/SecondaryFont'
import media from '../../styles/mediaQueries'

const HeaderWrapper = styled.div`
  padding: 16px;
  text-align: center;
`

const MainTitle = styled(PrimaryFont)`
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.5px;
  color: #26282a;
  text-transform: uppercase;
  ${media.abovePhone`
    line-height: 1.25;
    letter-spacing: 0.8px;
    font-size: 24px;
  `}
`

const SubTitle = styled(SecondaryFont)`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 1px;
  line-height: 1.6;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <MainTitle as="h1">Amanda Brookfield</MainTitle>
      <SubTitle as="h2">Best Selling Novelist</SubTitle>
    </HeaderWrapper>
  )
}

export default Header
