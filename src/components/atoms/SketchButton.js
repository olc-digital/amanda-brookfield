import React from 'react'
import styled from 'styled-components'

import ButtonBase from './ButtonBase'
import {KalamFont} from '../../styles/mixins'
import theme from '../../styles/theme'

const SketchButton = styled(ButtonBase)`
  ${KalamFont}
  position: relative;
  height: 52px;
  padding: 0;
  width: ${({width}) =>
    width === 'wide' ? '315px' : width === 'mid' ? '152px' : width};
  font-size: ${({width}) => (width === 'wide' ? '12px' : '14px')};
  letter-spacing: 2px;
  text-transform: ${({uppercase}) => uppercase && 'uppercase'};
  &:hover ${ButtonSvg} {
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  }
`
const ButtonSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const ButtonText = styled.div`
  position: relative;
  color: ${({type}) => textColors[type]};
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`

const strokes = {
  primary: theme.red,
  outline: theme.red,
  orange: '#ffffff',
}
const fills = {
  primary: theme.red,
  outline: '#ffffff',
  orange: theme.orange,
}
const textColors = {
  primary: '#ffffff',
  outline: theme.red,
  orange: '#ffffff',
}

export default function SketchButtonComponent(props) {
  return (
    <SketchButton {...props}>
      <ButtonSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127 52"
        preserveAspectRatio="none"
      >
        <path
          fill={fills[props.type]}
          fillRule="nonzero"
          stroke={strokes[props.type]}
          strokeWidth="2"
          d="M3.782 6.033C7.687 4.51 34.93 2.45 54.799 2.45c19.87 0 65.759-1.523 67.618 1.03 1.86 2.552 3.302 18.168 2.58 25.629-.72 7.46 2.581 17.623 0 18.652-2.58 1.03-54.624 1.03-67.482 1.03-12.858 0-50.224 2.718-53.733 0-3.509-2.717-3.905-41.237 0-42.76z"
        />
      </ButtonSvg>
      <ButtonText type={props.type}>{props.children}</ButtonText>
    </SketchButton>
  )
}

SketchButtonComponent.defaultProps = {
  type: 'primary',
  uppercase: false,
  wide: false,
  width: '125px',
}
