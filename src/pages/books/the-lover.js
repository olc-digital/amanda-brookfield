import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/btl.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      blurb={`<p>After twenty years of contentedly playing the role of home-maker and mother, Frances Copeland's life is shattered
            by the sudden death of her husband. With no career to fall back on and her son and daughter leaving home, the
            solitude of bereavement hits particularly hard.</p>

          <p>When new love beckons, in the form of a handsome young man fifteen years her junior, Frances is torn. She longs
            to open her heart again but does not dare to trust her feelings. Turning to her closest friends for help, she
            is met by a wall of judgemental attitudes and envy.</p>

          <p>Distracted by the predicament, her fragile confidence wavering, she fails to observe the crises spiralling out
            of control in the lives of her two children. A sudden tragic accident brings her to her senses, but it may already
            be too late. Not even the strongest love cannot sit around for ever.</p>`}
      reviews={`<div class="reviewtext">If you are a Joanna Trollope addict you could try Brookfield.</div>
          <div class="reviewref">Oxford Times</div>
          <div class="reviewtext">I found tears in my eyes, a smile on my lips,laughter emerging and periods of concern. I started reading this book
            one day and finished it the next, it was so irresistable! I would love for there to be a sequel...</div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">Enjoyed every minute of the book which was unputdownable, wanted to read from beginning to end all at once. Highly
            recommendable.
          </div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">This is the 3rd of Amanda Brookfield's books that I've read. With each one, I'm amazed at its consistent high quality.
            'The Lover' is no exception. </div>
          <div class="reviewref">Amazon Reviewer</div>`}
    />
  )
}

export default BookDescription
