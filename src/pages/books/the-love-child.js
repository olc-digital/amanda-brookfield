import React from 'react'
import BookInfo from '../../components/BookInfo'

import cover from '../../assets/covers/btlc.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      bookId="TLC"
      cover={cover}
      openModal={openModal}
      blurb={`<p>When Janine and Dougie fell in love they thought it would be for ever. 
      Fifteen years later their relationship is
            well and truly over, their daughter Stevie their one remaining connection.</p>
          <p>Stevie is on the cusp of adulthood. At sixteen, she’s not quite a child, but not quite grown up: a dangerous age.
            But it’s only during a birthday celebration in Spain, when she gets too close to one of Dougie’s best friends,
            that her parents realise just how dangerous.</p>
          <p>With friendships shattered and trusts betrayed, Janine and Dougie – brought together in Stevie’s moment of crisis
            – know they must see beyond the past if they’re to secure their daughter’s future. But even with such a lot at
            stake, can a relationship with so many complications ever have a future?</p>
          <p>Touching and heartfelt, The Love Child is a story about discovering what matters most in your life and having the
            courage to reach for it – not just once, but again and again.</p>`}
      reviews={`<div class="reviewtext">It's an engrossing story based around friends and their families. These are all very 'real' characters that you
            soon feel for. On many days during my journey with this book I could easily have read for longer and often until
            1/1.30am! I found it wonderful and intriguing; finding out who's who, who's with who, deep feeling really came
            through the writing... I could picture this as a TV mini series! </div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">Profoundly poignant, touching and acutely perceptive this credible novel speaks to the heart with such sincerity.
            Exploring the harsh realities of life and human relationships</div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">One thing I must warn you about, Amanda Brookfield is seriously good at writing about food; she stimulates the
            taste buds so effectively that you may find yourself staring into the fridge, wishing you too were around a man
            like Dougie.</div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">This author never disappoints. She is excellent and portraying family relationships especially step families .This
            is a most satisfactory gripping read.</div>
          <div class="reviewref">Amazon Reviewer</div>`}
    />
  )
}

export default BookDescription
