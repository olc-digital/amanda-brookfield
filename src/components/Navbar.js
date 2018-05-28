import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <header className="header">
    <div id="title">
      <Link to="/" id="titlelink">
        AMANDA
        <br /> BROOKFIELD
      </Link>
    </div>
    <nav id="navtop">
      <ul>
        <li>
          <Link to="/books" id="bookslink">
            <span>Books</span>
          </Link>
        </li>
        <li>
          <Link to="/author" id="authorlink">
            <span>Author</span>
          </Link>
        </li>
        <li>
          <Link to="/blog" id="bloglink">
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link to="/events" id="eventslink">
            <span>Events</span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar
