import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/bacos.jpg'

const BookDescription = ({openModal}) => (
  <BookInfo
    cover={ftloadCover}
    openModal={openModal}
    bookId={'acos'}
    blurb={`A group of young professional friends, with the world at their feet, gather for the glittering wedding of Julian
          and Veronica. Yet behind their façade of jollity old passions and resentments are stirring. Gloria is tiring of
          the endless pursuit of lovers, Katherine is tormented by her unrequited feelings for Julian, while George longs
          to be accepted properly by his friends instead of the butt of their jokes. As the knots of emotional dishonesty
          tighten, tragedy brews, promising to change all their lives forever.`}
    reviews={`<div class="reviewtext">What is refreshing here is the author's conspicuous sanity and her sharp line in defence of reason… It could be
            sentimental, but it isn’t.</div>
          <div class="reviewref">The Guardian</div>
          <div class="reviewtext">Amanda Brookfield's voice is young and clear… keeps a firm authorial hand </div>
          <div class="reviewref">Observer</div>`}
  />
)

export default BookDescription
