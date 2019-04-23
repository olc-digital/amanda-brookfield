import styled from 'styled-components'

const ButtonBase = styled.button.attrs({type: 'button'})`
  border: 0;
  cursor: pointer;
  background: transparent;
  outline: none;
  -webkit-appearance: none;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: inherit;
`

export default ButtonBase
