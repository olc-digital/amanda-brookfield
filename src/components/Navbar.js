import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <header className="header">
    <div id="title">
      <a id="titlelink" href="index.html">
        AMANDA
        <br /> BROOKFIELD
      </a>
    </div>
    <nav id="navtop">
      <ul>
        <li>
          <a href="books.html" id="bookslink">
            <span>Books</span>
          </a>
        </li>
        <li>
          <a href="author.html" id="authorlink">
            <span>Author</span>
          </a>
        </li>
        <li>
          <a href="/blog/" id="bloglink">
            <span>Blog</span>
          </a>
        </li>
        <li>
          <a href="events.html" id="eventslink">
            <span>Events</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar
