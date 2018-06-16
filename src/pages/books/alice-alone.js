import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/baa.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      blurb={`When the last of her three children leaves home, fifty-one-year-old Alice Hatton is forced to face the uncomfortable
          truth that she retains little affection for her golf-playing, lawyer husband, Peter. Lacking confidence, having
          known no occupation other than motherhood, she succumbs to obvious attempts at consolation – a new hairstyle, a
          lover – before stumbling upon a far more ingenious and sinister mode of self-fulfilment.`}
      reviews={`<div class="reviewtext">A bright, neat first novel…engagingly ebullient.</div>
          <div class="reviewref">The Financial Times</div>
          <div class="reviewtext">A strong sense of humour, a natural narrative gift and controlled, understated characterization signify a promising
            debut.
          </div>
          <div class="reviewref">Evening Standard</div>
          <div class="reviewtext">Penetrating insights into the ordinary female condition.</div>
          <div class="reviewref">Woman's Own</div>
          <div class="reviewtext">A confident narrative voice.</div>
          <div class="reviewref">Daily Telegraph</div>
          <div class="reviewtext">A Chekovian understanding of human beings and their failings.</div>
          <div class="reviewref">The Bookseller</div>`}
    />
  )
}

export default BookDescription
