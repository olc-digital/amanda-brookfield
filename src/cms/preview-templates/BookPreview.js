import React from 'react'
import PropTypes from 'prop-types'
import {BookPageTemplate} from '../../templates/book-page'

const BookPreview = ({entry, widgetFor, widgetsFor}) => (
  <BookPageTemplate
    title={entry.getIn(['data', 'title'])}
    bookId={entry.getIn(['data', 'bookId'])}
    content={widgetFor('body')}
    reviews={widgetsFor('reviews').map(review => ({
      text: review.getIn(['data', 'text']),
      reviewer: review.getIn(['data', 'reviewer']),
    }))}
  />
)

BookPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BookPreview
