import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/bsrl.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      blurb={`The Simple Rules of Love is a multi-generational story of love, lies and family ties. The Harrisons, a close-knit,
          affluent clan who gather regularly at Ashley House, their beautiful old family home, are looking forward to 42-year-old
          Cassie’s long awaited wedding and an exotic family holiday. But all such celebrations threaten to subside into
          chaos when an unwanted pregnancy, adultery and shadows of past losses stretch sibling and marital bonds to breaking
          point.`}
      reviews={`<div class="reviewtext">If Joanna Trollope is the queen of the Aga Saga, then Amanda Brookfield must be a strong contender for princess.</div>
          <div class="reviewref">Oxford Times</div>
          <div class="reviewtext">Intelligent and perceptive.</div>
          <div class="reviewref">Sainsburys Magazine</div>
          <div class="reviewtext">Fabulous! This was a warm and perceptive insight into the unpredictable ways of family life. I found it both humourous
            and poignant. I am from a large close-knit family and could certainly relate to the frequent domestic chaos but
            great support network. Reading this has inspired me to seek out further novels by Amanda.</div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">Once into the plot I couldnt put it down. Amanda has such an insight into family relationships and life in general.
            I feel lost now that the book is finished. Im missing the Harrison family and Ashley House very much! Thank you
            so much for such a wonderful read, Amanda!</div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">Simply the best follow up book I have ever read, another huge slice of Harrison family life that was such compulsive
            reading in the first book, a complex mixture of every emotion is portrayed in a book that is almost impossible
            to put down, a brilliant and compelling read, nothing comes close.</div>
          <div class="reviewref">Amazon Reviewer</div>`}
    />
  )
}

export default BookDescription
