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
          <Link to="/books" id="bookslink" activeClassName="active">
            <span>Books</span>
          </Link>
        </li>
        <li>
          <Link to="/author" id="authorlink" activeClassName="active">
            <span>Author</span>
          </Link>
        </li>
        <li>
          <Link to="/blog" id="bloglink" activeClassName="active">
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link to="/events" id="eventslink" activeClassName="active">
            <span>Events</span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar
