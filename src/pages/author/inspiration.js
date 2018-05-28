import React from 'react'
import Link from 'gatsby-link'

const Inspiration = () => (
  <div>
    <span className="justify" style={{fontSize: '16px'}}>
      <div
        className="generalheading inspirationheading"
        style={{paddingTop: '0px'}}
      >
        Where Do I Get My Ideas From?
      </div>
      <p>
        Inspiration is a tricky, hard-to-pin-down business. It is also, by
        definition, deeply private and - at times - extraordinarily mysterious.
        <br /> But with twenty years of writing and thirteen novels under my
        belt, I am prepared to reveal the following:
      </p>
      <ul>
        <li>
          Nothing makes inspiration disappear faster than the sense that it is
          being actively ‘hunted down’. This is, I am sure, why it always
          strikes me at the most inopportune moments, like when I’m stuck in a
          traffic jam, or pinned to the dentist’s chair, or in the small hours
          too nearly asleep to be bothered to stumble in search of a pen and
          pad…
        </li>

        <li>
          For no matter how fantastic the idea, I have learned that I need to{' '}
          <span className="red">WRITE IT DOWN</span>, or it will be lost under
          the jumble of shopping lists, decisions about what to eat/wear, latest
          hot gossip, what to watch on telly and all the other vital things that
          constitute my action-packed, non-inspirational life.
        </li>

        <li>
          Curiosity/Observation about the world…nosiness…?! Whatever you want to
          call it, I find that the tiniest physical detail – buck-teeth, a head
          of lustrous hair, bitten nails, a fallen tree, the shape of a cloud –
          can set in motion the idea for an entire character or scene. It’s like
          reality is the trigger, but then my imagination barges it out of the
          way and takes over.{' '}
        </li>
      </ul>

      <div className="generalheading inspirationheading">What if</div>
      <p>
        This is a game I play all the time in order to get under the skin of my
        characters.
        <br />For example, in writing my novel{' '}
        <Link href="/books/the-godmother">The Godmother</Link>, I asked myself:
        <br />
        <span className="red italic">
          What if I had pursued a career in business and hadn’t had children, or
          got married? What would I do if I decided that, although single,
          becoming a mother was important after all?
        </span>
      </p>
      <p>
        Or, in writing <Link to="/books/a-family-man">A Family Man</Link>:
        <br />
        <span className="red italic">
          What if a decent, hard-working thirtysomething Dad came home one
          evening to find that his wife had simply disappeared, leaving behind
          their four year old son?{' '}
        </span>
        <br />
      </p>
      <p>
        Or, in writing <Link to="/books/relative-love">Relative Love</Link>:
        <br />
        <span className="red italic">
          What if the worst, most unforeseeable tragedy befell a close family?
        </span>
        <br />
      </p>
      <p>
        Or, in writing <Link href="/books/life-begins">Life Begins</Link>
        <br />
        <span className="red italic">
          What if the direction of an entire life was based on a single, seismic
          childhood event?{' '}
        </span>
      </p>
      <p>
        Or, in writing <Link to="/books/the-love-child">The Love Child</Link>
        <br />
        <span className="red italic">
          What if a 40 year old had sex with his best friend's just-sixteen year
          old daughter? Could that ever be deemed 'right' or truly 'consensual'
          ?
        </span>
      </p>

      <div className="generalheading inspirationheading">
        More Personal Stuff
      </div>
      <p>
        My inspiration also appears to be propelled by a combination of the
        following:
      </p>
      <ul type="disc">
        <li>
          <span className="red">Terror</span> (of failure, of missing a
          deadline, of an empty day, of losing my touch…of pretty much anything,
          in fact).
        </li>
        <li>
          The <span className="red">right coffee mug</span>, the right pen...
          superstition rules.
        </li>
        <li>
          The weird, wonderful,{' '}
          <span className="red">
            occasional sense of the story pre-existing
          </span>, of it needing, simply, to be told, with me in the happy
          position of being the one to tell it.
        </li>
      </ul>
    </span>
  </div>
)

export default Inspiration
