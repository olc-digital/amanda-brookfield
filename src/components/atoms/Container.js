import styled from 'styled-components'
import media from '../../styles/mediaQueries'

const Container = styled.div`
  display: block;
  width: 100%;
  max-width: ${({theme}) => theme.containerWidth};
  margin: 0 auto;
  padding: 0 ${({theme}) => theme.gutterSize};
  ${({narrow, theme}) => narrow && `max-width: ${theme.narrowContainerWidth}`};
  ${({padBottom}) => padBottom && `padding-bottom: 48px;`};
  ${media.aboveMobile`
    ${({padBottom}) => padBottom && `padding-bottom: 72px;`};
  `}
`

export default Container
