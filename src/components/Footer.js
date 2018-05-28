import React from 'react'
import Link from 'gatsby-link'

import footerLine from '../assets/footerline.jpg'

const Footer = () => (
  <footer className="footer">
    <div className="footerline">
      <img src={footerLine} />
    </div>
    <Link to="/">Home</Link>
    <span> | </span>
    <Link to="/books">Books</Link>
    <span> | </span>
    <Link to="/author">Author</Link>
    <span> | </span>
    <Link to="/blog">Blog</Link>
    <span> | </span>
    <Link to="/events">Events</Link>
    <br /> © Amanda Brookfield 2018
  </footer>
)

export default Footer
