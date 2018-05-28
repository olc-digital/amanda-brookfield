import React from 'react'

import tlKindle from '../assets/tl-kindle.jpg'
import afmKindle from '../assets/afm-kindle.jpg'
import rlKindle from '../assets/rl-kindle.jpg'
import sidebarLine from '../assets/sidebarline.jpg'

const Sidebar = ({openModal}) => (
  <div className="sidebar1">
    <div className="sidebarsec" id="kindle">
      <a
        href="http://www.amazon.co.uk/Amanda-Brookfield/e/B005Q0BMSI/ref=la_B005Q0BMSI_rf_p_n_binding_browse-b_3?rh=n%3A266239%2Cp_82%3AB005Q0BMSI%2Cp_n_binding_browse-bin%3A368165031&bbn=266239&ie=UTF8&qid=1386278626&rnid=492562011"
        className="sidebaricon"
        id="kindleicon"
        target="_blank"
        rel="noopener noreferrer"
      />
      <div className="sidebarcontentcontainer kindletop">
        <div className="kindletitle">
          Also available on Kindle are my bestsellers:
        </div>
      </div>
      <div className="sidebarcontentcontainer kindlebot">
        <div style={{marginTop: '10px'}}>
          <a href="books/the-lover.html">
            <img src={tlKindle} />
          </a>
          <a href="books/relative-love.html">
            <img src={rlKindle} />
          </a>
          <a href="books/a-family-man.html">
            <img src={afmKindle} />
          </a>
        </div>
        <div style={{margin: '0px 0 5px 0px'}}>
          <a
            href="books/the-lover.html"
            className="readmoresmall buttonsmall"
            style={{marginLeft: '0px'}}
          >
            Read More
          </a>
          <a
            href="#"
            className="buybuttonsmall buttonsmall"
            onClick={e => {
              openModal(e, 'TL')
            }}
          >
            Buy
          </a>
          <a
            href="books/relative-love.html"
            className="readmoresmall buttonsmall"
          >
            Read More
          </a>
          <a
            href="#"
            className="buybuttonsmall buttonsmall"
            onClick={e => {
              openModal(e, 'RL')
            }}
          >
            Buy
          </a>
          <a
            href="books/a-family-man.html"
            className="readmoresmall buttonsmall"
          >
            Read More
          </a>
          <a
            href="#"
            className="buybuttonsmall buttonsmall"
            onClick={e => {
              openModal(e, 'AFM')
            }}
          >
            Buy
          </a>
        </div>
      </div>
    </div>
    <div className="sidebarsec" id="facebook">
      <a
        href="http://www.facebook.com/amandabrookfield100"
        className="sidebaricon"
        id="fbicon"
        target="_blank"
        rel="noopener noreferrer"
      />
      <div className="sidebarcontentcontainer">
        <div className="sidebarline">
          <img src={sidebarLine} />{' '}
        </div>
        <div
          style={{
            display: 'inline-block',
            width: '75px',
            height: '20px',
            float: 'left',
            margin: '0 10px',
          }}
        >
          <div
            className="fb-like"
            data-href="http://www.facebook.com/amandabrookfield100"
            data-send="false"
            data-layout="button_count"
            data-width="450"
            data-show-faces="false"
            data-font="arial"
          >
            {' '}
          </div>
        </div>
        <a
          href="http://www.facebook.com/amandabrookfield100"
          rel="noopener noreferrer"
          target="_blank"
        >
          Join Amanda on Facebook!
        </a>
      </div>
    </div>
    <div className="sidebarsec" id="twitter">
      <a
        href="http://www.twitter.com/words100"
        className="sidebaricon"
        id="twittericon"
      />
      <div className="sidebarcontentcontainer">
        <div className="sidebarline">
          <img src={sidebarLine} />{' '}
        </div>
        <div id="twittertimeline" style={{width: '263px'}}>
          <a
            className="twitter-timeline"
            href="https://twitter.com/words100"
            data-widget-id="278857650773557248"
          >
            Tweets by @words100
          </a>
        </div>
      </div>
    </div>
    <div className="sidebarsec" id="contact">
      <a
        href="mailto:contact@amandabrookfield.co.uk"
        className="sidebaricon"
        id="contacticon"
      />
      <div className="sidebarcontentcontainer">
        <div className="sidebarline">
          <img src={sidebarLine} />{' '}
        </div>
        <a href="mailto:contact@amandabrookfield.co.uk">
          contact@amandabrookfield.co.uk
        </a>
        <br />
        <br />
        <span style={{fontSize: '12px'}}>
          c/o Publicity, Penguin, 80 Strand, WC2R ORL
        </span>
      </div>
    </div>
    <div className="sidebarsec" id="links">
      <a
        href="https://www.penguin.co.uk/authors/amanda-brookfield/31470/"
        className="sidebaricon"
        id="linksicon"
      />
      <div className="sidebarcontentcontainer">
        <div className="sidebarline">
          <img src={sidebarLine} />{' '}
        </div>
        <ul>
          <li>
            <a href="http://www.penguin.co.uk/">Penguin</a>
          </li>
          <li>
            <a href="https://www.penguin.co.uk/authors/amanda-brookfield/31470/">
              Amanda Brookfield at Penguin
            </a>
          </li>
          <li>
            <a href="http://www.hodder.co.uk/">Hodder &amp; Stoughton</a>
          </li>
          <li>
            <a href="http://www.davidhigham.co.uk/">David Higham Assoc</a>
          </li>
          <li>
            <a href="http://www.waterstones.com/waterstonesweb/home.do">
              Waterstones
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Sidebar
