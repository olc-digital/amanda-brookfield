import React from 'react'
import Link from 'gatsby-link'

import {books, articles, shortStories} from '../data'

const BooksSidebar = ({handleHoverBook, hoverBookId}) => (
  <div>
    <div className="sidebarbooks" style={{width: '220px'}}>
      <span className="booksheading">Books</span>
      <ul>
        {Object.values(books).map(({link, color, title, slug}) => (
          <li key={link}>
            <Link
              to={link}
              onMouseEnter={e => {
                handleHoverBook(e, slug)
              }}
              onMouseLeave={e => {
                handleHoverBook(e, undefined)
              }}
              className={
                'hoverfade ' + (hoverBookId === slug && 'hoverfadenow')
              }
              style={{color}}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <span className="booksheading">Articles</span>
      <ul>
        {articles.map(({link, title}) => (
          <li key={link}>
            <Link to={link} className="hoverfadetext">
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <span className="booksheading">Short Stories</span>
      <ul>
        {shortStories.map(({link, title}) => (
          <li key={link}>
            <Link to={link} className="hoverfadetext">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default BooksSidebar
