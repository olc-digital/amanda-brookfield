import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Sidebar from '../components/Sidebar'

import portrait from '../assets/amandaphoto.jpg'
import contentLine from '../assets/contentline.jpg'
import ftloadcover from '../assets/ftloadcover.jpg'
import tlccover from '../assets/tlccover.jpg'
import bikycover from '../assets/bikycover.jpg'

export default class IndexPage extends Component {
  render() {
    return (
      <section className="section">
        <Sidebar openModal={this.props.openModal} />
        <div className="homecontent">
          <div className="paddedcontent">
            <div id="welcomehome">
              <img
                src={portrait}
                alt="Amanda Brookfield portrait"
                className="amanda-portrait"
              />

              <div className="hometext">
                <span className="homeheading homeheading--inline">Welcome</span>&nbsp;to
                my official website. There’s lots to dip into, with sneak-peeks
                at my inspirations as well as information about all my fifteen
                best-sellers, including&nbsp;
                <em>Alice Alone</em>,&nbsp;
                <em>Relative Love</em> and&nbsp;
                <em>Life Begins</em>.
                <br />
                <br />
                <strong>
                  THE BIG NEWS: my latest book&nbsp;
                  <em>For The Love of a Dog</em> will be published by Head of
                  Zeus this autumn. It is available now to pre-order, both in
                  hardback and e-book.
                </strong>
              </div>
            </div>
            <div className="contentlines" style={{paddingTop: '35px'}}>
              <img src={contentLine} />
            </div>
            <div id="tlchome" className="homeShowcase">
              <div>
                <img
                  src={ftloadcover}
                  alt="For the Love of a Dog cover"
                  style={{paddingRight: '15px'}}
                />
              </div>
              <div className="hometext">
                <span className="homeheading">For the Love of a Dog</span>
                <br />For release in November 2018, &nbsp;
                <em>For The Love of a Dog</em> is a funny and poignant memoir of
                emotional meltdown and recovery with the unwitting aid of a
                golden doodle puppy called Mabel. Following the death of my
                mother and the end of a post-divorce relationship, my world fell
                apart and desolation closed in. Talk of getting a puppy was just
                to cheer myself up. I never thought I would actually go through
                with it; I was barely capable of looking after myself, let alone
                a dog…
                <div style={{textAlign: 'center', padding: '15px 0 0 0'}}>
                  <Link
                    to="/books/for-the-love-of-a-dog"
                    className="readmore button"
                  >
                    Read More
                  </Link>
                  <a
                    href="#"
                    className="readmore button"
                    onClick={e => {
                      this.props.openModal(e, 'ftload')
                    }}
                  >
                    Pre-order
                  </a>
                </div>
              </div>
            </div>
            <div className="contentlines">
              <img src={contentLine} />
            </div>
            <div id="tlchome" className="homeShowcase">
              <div>
                <img
                  src={tlccover}
                  alt="The Love Child cover"
                  style={{paddingRight: '15px'}}
                />
              </div>
              <div className="hometext">
                <span className="homeheading">The Love Child</span>
                <br /> Published in Jan 2013,
                <em>The Love Child</em>&nbsp;is a touching and heartfelt story
                about discovering what matters most in your life and having the
                courage to reach for it - not just once, but again and again.
                <br /> When Janine and Dougie fell in love they thought it would
                be for ever. Fifteen years later their relationship is well and
                truly over, their daughter Stevie their one remaining
                connection...
                <div style={{textAlign: 'center', padding: '15px 0 0 0'}}>
                  <Link to="/books/the-love-child" className="readmore button">
                    Read More
                  </Link>
                  <a
                    href="#"
                    className="buybutton button"
                    onClick={e => {
                      this.props.openModal(e, 'tlc')
                    }}
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div className="contentlines">
              <img src={contentLine} />
            </div>
            <div id="bikyhome" className="homeShowcase">
              <div>
                <img
                  src={bikycover}
                  alt="Before I Knew You cover"
                  style={{paddingRight: '15px'}}
                />
              </div>
              <div className="hometext">
                <span className="homeheading">Before I Knew You</span>
                <br /> Released in March 2011,
                <em>Before I Knew You</em> tells the unsettling story of what
                happens when two very different families swap houses across the
                Atlantic one August. Strangers when they borrow each other's
                respective homes, their lives then start to intertwine in
                unexpected ways, throwing them at the mercy of their pasts and
                each other.
                <div style={{textAlign: 'center', padding: '15px 0 0 0'}}>
                  <Link
                    to="/books/before-i-knew-you"
                    className="readmore button"
                  >
                    Read More
                  </Link>
                  <a
                    href="#"
                    className="buybutton button"
                    onClick={e => {
                      this.props.openModal(e, 'biky')
                    }}
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
