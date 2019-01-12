import React from 'react'
import styled from 'styled-components'

import media from '../../styles/mediaQueries'
import mabel1 from '../../img/mabel/mabel-1.jpg'
import mabel2 from '../../img/mabel/mabel-2.jpg'
import mabel3 from '../../img/mabel/mabel-3.jpg'
import mabel4 from '../../img/mabel/mabel-4.jpg'
import mabel5 from '../../img/mabel/mabel-5.jpg'
import mabel6 from '../../img/mabel/mabel-6.jpg'

const galleryImages = [mabel1, mabel2, mabel3, mabel4, mabel5, mabel6]

const GalleryGrid = styled.div`
  display: flex;
  margin: 0 -${({theme}) => theme.gutterSize};
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

export default function MabelGallery() {
  return (
    <GalleryGrid>
      {galleryImages.map((image, i) => (
        <GalleryImage key={i} url={image} />
      ))}
    </GalleryGrid>
  )
}
