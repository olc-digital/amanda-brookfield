import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/bmg.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      bookId={'mg'}
      blurb={`The Tarrants and the Howards have been friends for many years, sharing holidays with their young children and enjoying
          convivial meals at each other’s dining tables. But behind this companionship lurk seeds of a great and growing
          unhappiness, sown by events deep in their past. As these unresolved dilemmas begin to surface, the strains between
          the two families become impossible to ignore. And when infidelity casts its ugly shadow onto the proceedings, the
          collapse of their apparently ordered world seems inevitable.`}
      reviews={`<div class="reviewtext">Amanda Brookfield explores the dark side of happy families.</div>
          <div class="reviewref">Bolton Evening News</div>`}
    />
  )
}

export default BookDescription
