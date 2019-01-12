import React from 'react'
import styled from 'styled-components'

import ExternalLink from '../atoms/ExternalLink'
import Icon from '../atoms/Icon'
import media from '../../styles/mediaQueries'
import mabel1 from '../../img/mabel/mabel-1.jpg'
import mabel2 from '../../img/mabel/mabel-2.jpg'
import mabel3 from '../../img/mabel/mabel-3.jpg'
import mabel4 from '../../img/mabel/mabel-4.jpg'
import mabel5 from '../../img/mabel/mabel-5.jpg'
import mabel6 from '../../img/mabel/mabel-6.jpg'

const galleryImages = [mabel1, mabel2, mabel3, mabel4, mabel5, mabel6]

const Wrapper = styled.div`
  position: relative;
  margin: 0 -${({theme}) => theme.gutterSize};
  ${media.aboveContainer`
    margin: 0;
  `}
`
const GalleryGrid = styled.div`
  display: flex;
  overflow-x: scroll;
  ${media.aboveContainer`
    margin: 0;
    flex-flow: row wrap;
    width: 270px;
  `}
`

const GalleryImage = styled.div`
  background-image: ${({url}) => `url(${url})`};
  background-size: cover;
  background-position: center;
  width: 135px;
  height: 135px;
  flex: 1 0 auto;
`

const CornerInstaIcon = styled(Icon).attrs({name: 'insta', fill: '#ffffff'})`
  position: absolute;
  bottom: 0;
  right: 0;
`

export default function MabelGallery() {
  return (
    <Wrapper>
      <GalleryGrid>
        {galleryImages.map((image, i) => (
          <ExternalLink
            key={i}
            href="https://www.instagram.com/amanda_and_mabel_brookfield"
          >
            <GalleryImage url={image} />
          </ExternalLink>
        ))}
      </GalleryGrid>
      <CornerInstaIcon />
    </Wrapper>
  )
}
