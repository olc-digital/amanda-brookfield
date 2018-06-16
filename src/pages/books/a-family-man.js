import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/bafm.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      blurb={`Thirty-one-year-old Matthew Webster’s world is shattered when his wife walks out, leaving him to look after their
          four-year-old son, Joshua, alone. Grief and shock are compounded by the sudden need to juggle childcare with his
          demanding job as a theatre critic. Matthew works hard to rebuild his life, but is thwarted constantly by unanswered
          questions as to his wife’s whereabouts and her reasons for leaving. It is only as the truth emerges that he learns
          the full heartbreak and joy of unconditional love.`}
      reviews={`<div class="reviewtext">The novel walks a line between comedy and wrenching sadness. It is fluently written and its depiction of domestic
            chaos … is all too recognisable.</div>
          <div class="reviewref">The Sunday Times</div>
          <div class="reviewtext">Charming and enjoyable.</div>
          <div class="reviewref">Best</div>
          <div class="reviewtext">Another gem of a book from Amanda Brookfield, a thought provoking insight into the struggles of a man left to cope
            on his own with the many aspects of childcare, and all it's problems. Entertaining and inspiring, well worth
            a read.</div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">Loved this book. Once I started, I couldn't put it down. I quickly bonded with Matt and Josh. An enjoyable read
            that tugs at the heart strings.</div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">She fleshes out her characters so well, that they are almost real. I have read several of her novels since discovering
            her by chance on Amazon for my Kindle.</div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">Brilliant plot, beautifully written. Absollutely loved this book. Highly recommended</div>
          <div class="reviewref">Amazon Reviewer</div>`}
    />
  )
}

export default BookDescription
