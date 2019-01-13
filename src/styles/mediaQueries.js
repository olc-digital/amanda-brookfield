import {css} from 'styled-components'
import upperFirst from 'lodash/upperFirst'

export const sizes = {
  container: 792,
  mobile: 576,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[`above${upperFirst(label)}`] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  acc[`below${upperFirst(label)}`] = (...args) => css`
    @media (max-width: ${sizes[label] - 1}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default media
