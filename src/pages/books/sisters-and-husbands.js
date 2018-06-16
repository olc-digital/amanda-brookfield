import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/bsh.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      bookId={'sah'}
      blurb={`Ever since the death of their father twenty years before, beautiful thirty-two-year-old Anna has acted as her younger
          sister Becky’s support, playing the peace-maker in her stormy relationship with their mother, and counselling her
          through the traumas of a life that has always appeared charmless and problematic in comparison to her own. Now
          married to wealthy, handsome David Lawrence, with a luxurious country home and a successful career in broadcasting,
          Anna’s good fortune looks set to continue. But when she unexpectedly falls pregnant and Becky’s marriage runs into
          trouble, the door to the sisters past suddenly swings open, exploding all their longheld perceptions both of each
          other and themselves.`}
      reviews={`<div class="reviewtext">Through her characters, Brookfield skillfully illuminates the relationships, dilemmas and compromises that define
            so many lives.</div>
          <div class="reviewref">The Sunday Express</div>
          <div class="reviewtext">Few contemporary British novelists writing today expore the messy tangles of close human relationships with quite
            such warm perceptiveness as Brookfield.</div>
          <div class="reviewref">Henry Sutton, Daily Mirror</div>
          <div class="reviewtext">I savoured every second of this deeply satisfying book. Amanda Brookfield goes from strength to strength.</div>
          <div class="reviewref">Patricia Scanlan</div>`}
    />
  )
}

export default BookDescription
