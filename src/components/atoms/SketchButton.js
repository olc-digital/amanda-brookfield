import React from 'react'
import styled from 'styled-components'
import ButtonBase from './ButtonBase'
import {KalamFont} from '../../styles/mixins'
import outlineBg from '../../img/button-bg-outline.svg'

const SketchButton = styled(ButtonBase)`
  ${KalamFont}
  height: 48px;
  padding: 0;
  width: ${({wide}) => (wide ? '327px' : '125px')};
  font-size: ${({wide}) => (wide ? '12px' : '14px')};
  letter-spacing: 2px;
  text-transform: ${({uppercase}) => (uppercase ? 'uppercase' : 'none')};
  position: relative;
  /* background: url(${outlineBg});
  background-size: 100% 48px; */
  /* color: ${({theme}) => theme.white}; */
  /* &:hover ${Background} {
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  } */
`
const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  &:hover {
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  }
`
const Text = styled.div`
  position: relative;
  pointer-events: none;
`

export default function SketchButtonTot(props) {
  return (
    <SketchButton {...props}>
      <Background src={outlineBg} />
      <Text>{props.children}</Text>
    </SketchButton>
  )
}
