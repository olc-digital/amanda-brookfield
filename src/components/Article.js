import React from 'react'

const BookDescription = ({title, children}) => (
  <div className="bookscontent">
    <span className="booksheading">{title}</span>
    {children}
  </div>
)

export default BookDescription
