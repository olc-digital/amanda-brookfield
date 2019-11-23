import React from 'react'
import PropTypes from 'prop-types'
import {EventsPageTemplate} from '../../templates/events-page'

const BookPreview = ({widgetsFor}) => {
  return (
    <EventsPageTemplate
      events={Array.from(
        widgetsFor('events').map(event => {
          const date = event.getIn(['data', 'date'])
          const dateISO = date instanceof Date ? date.toISOString() : date

          return {
            title: event.getIn(['data', 'title']),
            date: dateISO,
            description: event.getIn(['data', 'description']),
            time: event.getIn(['data', 'time']),
          }
        }),
      )}
    />
  )
}

BookPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BookPreview
