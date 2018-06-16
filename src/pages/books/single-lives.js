import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/bsl.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      bookId={'sl'}
      blurb={`Thirty-three-year-old newspaper columnist, Annie Jordan, thinks that the only thing missing from her life is romance.
          Her glamorous friends, flatmate Marina and gay easy-going Jake, seem to be suffering from the same problem, in
          spite of far more promising social lives. Yet love, when it comes, brings as many problems as it solves. As her
          life starts to unravel, Annie finds it increasingly difficult to keep her darkening state of mind separate from
          her newspaper column and fears that she may lose her job. Illness and the confusing secretive behaviour of a new
          neighbour compound her difficulties, but also compel her to realise that she has no hope of finding lasting happiness
          with another person until she has begun to understand herself.`}
      reviews={`<div class="reviewtext">Witty and Engaging</div>
          <div class="reviewref">Family Circle</div>`}
    />
  )
}

export default BookDescription
