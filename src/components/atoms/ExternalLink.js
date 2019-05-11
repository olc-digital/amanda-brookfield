import styled from 'styled-components'
import {OutboundLink} from 'gatsby-plugin-google-analytics'

const ExternalLink = styled(OutboundLink).attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``

export default ExternalLink
