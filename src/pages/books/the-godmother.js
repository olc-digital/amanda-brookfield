import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/btg.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      blurb={`Rachel Elliot is singe and attractive, a director of a successful advertising agency, with a handsome lover, several
          close friends and a clutch of young godchildren. But as her fortieth birthday approaches so does a sneaking sense
          of futility. With typical resolution, she decides that the answer to this new problem is to have a child of her
          own. Her quest, however, proves fraught with problems. An unforeseen disaster at work, lack of comprehension and
          cooperation from friends and lovers lead her to the difficult realisation that it takes more than a determined
          mind to find true emotional fulfilment.`}
      reviews={`<div class="reviewtext">Take this book on holiday with you – its a wonderful beach read with a happy, if rather unexpected, ending.</div>
          <div class="reviewref">Options</div>`}
    />
  )
}

export default BookDescription
