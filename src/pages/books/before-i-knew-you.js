import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/bbiky.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      blurb={`Before I Knew You tells the unsettling story of what happens when two very different families swap houses across
          the Atlantic one August. William and Beth, newly-weds from Connecticut, need to visit London so that William can
          spend time with his three sons from his first marriage, while Sophie and Andrew, who have two teenage daughters,
          are looking for a holiday that might rescue them both from the daily grind and a gradual disintegration of their
          relationship. Neither family finds what they expect. Strangers when they borrow each other's respective homes,
          their lives then start to intertwine in unexpected ways, throwing them at the mercy of their pasts and each other.`}
      reviews={`<div class="reviewtext">A thoughtful, gripping and interesting read.</div>
          <div class="reviewref">Irish Times</div>
          <div class="reviewtext">No one gets to the heart of human relationships quite so perceptively as Brookfield.</div>
          <div class="reviewref">The Mirror</div>
          <div class="reviewtext">An intriguing and at times tragic tale.</div>
          <div class="reviewref">Sussex Society</div>
          <div class="reviewtext">Unputdownable. Perceptive. Poignant. I loved it.</div>
          <div class="reviewref">Patricia Scanlan</div>
          <div class="reviewtext">This acute and seductive novel twists and turns, delighting as it surprises.</div>
          <div class="reviewref">Jonathan Hourigan (City-AM)</div>
          <div class="reviewtext">There should have been a trumpet fanfare when this book was launched, for Amanda Brookfield is, surely, the queen
            of the relationship novel. I have read (and enjoyed) all her previous books but this one is - in my opinion -
            the best. It is the story of how apparently even secure relationships can fall apart. Is there a happy ending?
            I am not going to spoil your enjoyment...just buy and read and enjoy this splendid book.</div>
          <div class="reviewref">Amazon 5 Star Review</div>`}
    />
  )
}

export default BookDescription
