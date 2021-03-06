import styled from 'styled-components'

const Container = styled.div`
  display: block;
  width: 100%;
  max-width: ${({theme}) => theme.containerWidth};
  margin: 0 auto;
  padding: 0 ${({theme}) => theme.gutterSize};
  ${({narrow, theme}) => narrow && `max-width: ${theme.narrowContainerWidth}`};
`

export default Container
