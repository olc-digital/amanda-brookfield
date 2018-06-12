import React from 'react'
import Link from 'gatsby-link'

import {books} from '../data'

const BooksSidebar = () => (
  <div>
    <div className="sidebarbooks" style={{width: '220px'}}>
      <span className="booksheading">Books</span>
      <ul>
        {Object.values(books).map((book, i) => (
          <li key={i}>
            <Link
              to={book.link}
              className="hoverfadetext"
              style={{color: book.color}}
            >
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <span className="booksheading">Articles</span>
      <ul>
        <li>
          <Link to="otherpubs/how-i-found-my-voice" className="hoverfadetext">
            How I Found My Voice
          </Link>
        </li>
        <li>
          <Link to="otherpubs/under-one-roof" className="hoverfadetext">
            Under One Roof
          </Link>
        </li>
        <li>
          <Link to="otherpubs/losing-my-father" className="hoverfadetext">
            Losing My Father
          </Link>
        </li>
        <li>
          <Link
            to="otherpubs/gap-year-a-mothers-story"
            className="hoverfadetext"
          >
            Gap Year - A Mother’s Story
          </Link>
        </li>
      </ul>
      <br />
      <span className="booksheading">Short Stories</span>
      <ul>
        <li>
          <Link to="otherpubs/the-house-sitter" className="hoverfadetext">
            The House Sitter
          </Link>
        </li>
        <li>
          <Link to="otherpubs/afterlife" className="hoverfadetext">
            Afterlife
          </Link>
        </li>
        <li>
          <Link to="otherpubs/the-farewell" className="hoverfadetext">
            The Farewell
          </Link>
        </li>
        <li>
          <Link to="otherpubs/guardian-angel" className="hoverfadetext">
            Guardian Angel
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default BooksSidebar
