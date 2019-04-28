import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import ExternalLink from '../atoms/ExternalLink'

const Wrapper = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: center;
  font-size: 20px;

  svg {
    color: ${({theme}) => theme.black};
    &:hover {
      color: ${({theme}) => theme.red};
    }
    width: 44px;
    margin: 16px;
  }
`

const SocialMediaLinks = () => (
  <Wrapper>
    <ExternalLink href="https://www.instagram.com/amanda_and_mabel_brookfield/">
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </ExternalLink>
    <ExternalLink href="https://www.facebook.com/amandabrookfield100/">
      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
    </ExternalLink>
    <ExternalLink href="https://twitter.com/ABrookfield1">
      <FontAwesomeIcon icon={['fab', 'twitter']} />
    </ExternalLink>
  </Wrapper>
)

export default SocialMediaLinks
