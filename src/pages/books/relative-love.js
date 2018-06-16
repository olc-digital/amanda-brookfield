import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/brl.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      bookId={'rl'}
      blurb={`The Harrison family, gathering for Christmas at their big country house, inhabit a tight safe world of privilege
          and tradition. But this year, time is catching up with the elderly Pamela and John, while troubles are brewing
          in the lives of their four children: Cassie, the cosseted youngest, is in the throes of a secret affair with a
          married man, while awkward Elizabeth struggles with a faltering second marriage. Peter, who will inherit Ashley
          House, is beginning to meet resistance to the idea from his career-orientated wife, Helen. Only carefree Charlie
          and his wife, Serena, seem truly content, with nothing to vex them but their adolescent twin girls and the simpler
          teething troubles of their toddler. But tragedy, of the most unforeseeable and devastating kind, is lying in wait.
          The family, so apparently secure, is rocked to its core. Hidden turmoil, secrets past and present, are forced to
          the surface, laying bare the fragility of human happiness and the myriad faces of love in an imperfect world.
        `}
      reviews={`<div class="reviewtext">This book, about deep and complex family love from this accomplished author, is told with true passion</div>
          <div class="reviewref">Family Circle</div>
          <div class="reviewtext">My favorite Amanda Brookfield read! The characters are so life like and the descriptions are excellent - just read
            the first page of this book and I am certain you will want to read more!</div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">Great family saga</div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">As always a thoroughly enjoyable read.</div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">Loved this , got it for a good price on kindle and couldent wait to buy the sequel ,The simple rules of love.</div>
          <div class="reviewref">Amazon Reviewer</div>`}
    />
  )
}

export default BookDescription
