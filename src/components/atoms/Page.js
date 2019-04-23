import styled from 'styled-components'
import media from '../../styles/mediaQueries'

const Page = styled.main`
  margin-bottom: 48px;
  ${media.aboveMobile`
    margin-bottom: 72px;
  `}
`

export default Page
