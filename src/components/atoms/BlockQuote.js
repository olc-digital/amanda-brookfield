import styled from 'styled-components'

const BlockQuote = styled.blockquote`
  margin: 24px 0 24px 24px;
  font-style: italic;
  line-height: ${({theme}) => theme.lineHeight};
`

export default BlockQuote
