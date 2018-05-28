import React from 'react'
// import {ModalContext} from '../../layouts/ModalContext'

const BookDescription = props => {
  return (
    <div>
      <div className="bookscontent">
        <div className="booknav booksheading">
          <a href="#" className="aboutbooklink">
            About
          </a>
        </div>
        <img className="cover" src="../images/covers/ftload.jpg" />
        <div className="booktext">
          <div className="bookabout">
            After the death of her mother and the end of a new relationship
            leave her heartbroken, novelist Amanda Brookfield finds her once
            secure world imploding. As despair deepens, she latches onto the
            idea of getting a puppy just to revive her optimistic spirit.
            <br />
            <br />Aware that her lifestyle will not suit becoming a dog-owner
            and warned by friends not to give up her freedom, Amanda nonetheless
            cannot resist Mabel, an eight week old golden doodle. Arming herself
            with an arsenal of equipment, she soon learns that there are no
            short-cuts to training and caring for a dog. In the daily challenges
            that ensue, the constant ups and downs, Amanda realises she is
            starting to come to terms with her bereavement and the prospect of
            facing the rest of her life alone.
            <br />
            <br />
            <em>For The Love of a Dog</em> charts the bigger, more poignant
            story about the labour of emotional recovery after the trauma of
            loss. Mabel shines like a light throughout, the innocent architect
            of rebuilding her owner’s shattered self-belief. Mabel’s own journey
            is equally captivating, as she blossoms into a mischievous,
            endearing head-turner of a companion – as affectionate as she is
            glorious.
          </div>
          <div className="bookreviews">
            <div className="reviewtext">
              An absorbing look at one woman's midlife crisis.
            </div>
            <div className="reviewref">Bella</div>
            <div className="reviewtext">
              A warm-hearted, perceptive tale of hope and renewal that shows it
              is possible to start life again.
            </div>
            <div className="reviewref">Prima</div>
            <div className="reviewtext">
              It makes you realise how sometimes even when you think your life
              is routine and mundane, that much can happen with just one small
              change...some of it was heartbreaking, much of it was satisfying.
              It left me with a feel good factor, something that is my mark of a
              good book.
            </div>
            <div className="reviewref">Amazon Reviewer</div>
            <div className="reviewtext">
              It was a great read and, just like the holiday, I didn’t want it
              to end.
            </div>
            <div className="reviewref">Amazon Reviewer</div>
            <div className="reviewtext">
              I thought it was a beautifully crafted piece of storytelling. I
              loved the way you kept changing the perspective of the story by
              using different characters to move the narrative along. The theme
              of trust shaken in childhood and impacting on adult relationships
              was an interesting one and I loved the fact that while you handled
              it earnestly there was always a positive, feel good quality to the
              story.
            </div>
            <div className="reviewref">Amazon Reviewer</div>
          </div>
          <div className="bookbuy">
            <a href="#buylb" rel="facebox" className="readmore button">
              Pre-order
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDescription
