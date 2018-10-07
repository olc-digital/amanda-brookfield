import React from 'react'
import {Timeline} from 'react-twitter-widgets'
import FacebookProvider, {Like} from 'react-facebook'
import Link from 'gatsby-link'
import {OutboundLink} from 'gatsby-plugin-google-analytics'
import {books} from '../data'

import sidebarLine from '../assets/sidebarline.jpg'

const Sidebar = ({openModal}) => (
  <div className="sidebar1">
    <div className="sidebarsec">
      <div className="clearfix">
        <OutboundLink
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
      </div>
      <div className="sidebarcontentcontainer kindlebottom">
        {['tl', 'rl', 'afm'].map(bookId => (
          <div key={bookId}>
            <Link to={books[bookId].link}>
              <img src={books[bookId].covers.kindle} />
            </Link>
            <div>
              <Link
                to={books[bookId].link}
                className="readmoresmall buttonsmall"
                style={{marginLeft: '0px'}}
              >
                Read More
              </Link>
              <a
                href="#"
                className="buybuttonsmall buttonsmall"
                onClick={e => {
                  openModal(e, bookId)
                }}
              >
                Buy
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="sidebarsec" id="instagram">
      <OutboundLink
        href="https://www.instagram.com/amanda_and_mabel_brookfield/"
        className="sidebaricon"
        id="instaicon"
        target="_blank"
        rel="noopener noreferrer"
      />
      <div className="sidebarcontentcontainer">
        <OutboundLink
          href="https://www.instagram.com/amanda_and_mabel_brookfield/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div style={{margin: '18px 0 0 10px'}}>
            Follow Amanda and Mabel on Instagram
          </div>
        </OutboundLink>
      </div>
    </div>
    <div className="sidebarsec" id="facebook">
      <OutboundLink
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
          <FacebookProvider appId="176347892451294">
            <Like
              href="http://www.facebook.com/amandabrookfield100"
              showFaces={false}
              layout="button_count"
              send={false}
              font="arial"
              width="450"
              className="fb-like"
            />
          </FacebookProvider>
        </div>
        <OutboundLink
          href="http://www.facebook.com/amandabrookfield100"
          rel="noopener noreferrer"
          target="_blank"
        >
          Join Amanda on Facebook!
        </OutboundLink>
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
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'ABrookfield1',
            }}
            options={{
              username: 'ABrookfield1',
              height: '450',
            }}
          />
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
        <br />
        <br />
        <span style={{fontSize: '12px'}}>
          c/o Head of Zeus, 5-8 Hardwick Street, Clerkenwell, London EC1R 4G
        </span>
        <br />
        <br />
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
            <a href="http://headofzeus.com/">Head of Zeus</a>
          </li>
          <li>
            <a href="https://www.penguin.co.uk/">Penguin</a>
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
