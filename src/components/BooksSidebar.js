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
          <a
            href="otherpubs/how-i-found-my-voice.html"
            className="hoverfadetext"
          >
            How I Found My Voice
          </a>
        </li>
        <li>
          <a href="otherpubs/under-one-roof.html" className="hoverfadetext">
            Under One Roof
          </a>
        </li>
        <li>
          <a href="otherpubs/losing-my-father.html" className="hoverfadetext">
            Losing My Father
          </a>
        </li>
        <li>
          <a
            href="otherpubs/gap-year-a-mothers-story.html"
            className="hoverfadetext"
          >
            Gap Year - A Mother's Story
          </a>
        </li>
      </ul>
      <br />
      <span className="booksheading">Short Stories</span>
      <ul>
        <li>
          <a href="otherpubs/the-house-sitter.html" className="hoverfadetext">
            The House Sitter
          </a>
        </li>
        <li>
          <a href="otherpubs/afterlife.html" className="hoverfadetext">
            Afterlife
          </a>
        </li>
        <li>
          <a href="otherpubs/the-farewell.html" className="hoverfadetext">
            The Farewell
          </a>
        </li>
        <li>
          <a href="otherpubs/guardian-angel.html" className="hoverfadetext">
            Guardian Angel
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default BooksSidebar
