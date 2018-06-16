import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/bwog.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      bookId={'wog'}
      blurb={`A rich banker husband, a comfortable home, two beautiful children – Jane Lytton appears to have everything a woman
          could want, except a man who loves her enough to make her happy. Her decision to walk away from her marriage is
          greeted with a mixture of vitriol and measured, uncomprehending sympathy. With her needy younger sister, Mattie,
          on her own tightrope of despair and a growing sense of distance from her best friend, Jane struggles to realise
          the fresh start she has promised herself. A chance of happiness does at last appear but from such an unexpected
          quarter that she almost fails to recognise it.`}
      reviews={`<div class="reviewtext">Amanda Brookfield could lead the woman's novel a few steps further out of its cultural ghetto</div>
          <div class="reviewref">Sunday Telegraph</div>`}
    />
  )
}

export default BookDescription