import React from 'react'
import Link from 'gatsby-link'

import {books, articles, shortStories} from '../data'

const BooksSidebar = ({handleHoverBook, hoverBookId}) => (
  <div>
    <div className="sidebarbooks" style={{width: '220px'}}>
      <h2>Books</h2>
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
      <h2>Articles</h2>
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
      <h2>Short Stories</h2>
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
