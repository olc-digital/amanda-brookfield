import styled from 'styled-components'

import media from '../../styles/mediaQueries'

const ArticleSection = styled.section`
  margin: 0 -12px;
  display: flex;
  flex-direction: column;
  ${media.aboveMobile`
    flex-direction: row;
  `}
`

export default ArticleSection
