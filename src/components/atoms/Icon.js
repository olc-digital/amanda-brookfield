import React from 'react'
import styled from 'styled-components'

const Insta = ({fill}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 44 44"
  >
    <g fill={fill || '#26282A'}>
      <path d="M18.153 13.883c-2.63 0-4.77 2.14-4.77 4.77v6.715c0 2.63 2.14 4.77 4.77 4.77h7.62c2.63 0 4.77-2.14 4.77-4.77v-6.715c0-2.63-2.14-4.77-4.77-4.77h-7.62zm7.62 17.619h-7.62a6.14 6.14 0 0 1-6.133-6.134v-6.715a6.14 6.14 0 0 1 6.133-6.132h7.62a6.14 6.14 0 0 1 6.133 6.132v6.715a6.14 6.14 0 0 1-6.133 6.134z" />
      <path d="M21.963 17.914a4.101 4.101 0 0 0-4.096 4.097 4.101 4.101 0 0 0 4.096 4.097 4.101 4.101 0 0 0 4.097-4.097 4.101 4.101 0 0 0-4.097-4.097zm0 9.557c-3.01 0-5.46-2.45-5.46-5.46s2.45-5.46 5.46-5.46 5.46 2.45 5.46 5.46-2.45 5.46-5.46 5.46zM28.472 16.72a1.133 1.133 0 1 1-2.265 0 1.133 1.133 0 0 1 2.265 0" />
    </g>
  </svg>
)

const I = styled.i`
  width: 44px;
  height: 44px;
  display: flex;
`

const iconMap = {
  insta: Insta,
}

export default function Icon(props) {
  return <I {...props}>{React.createElement(iconMap[props.name], props)}</I>
}
