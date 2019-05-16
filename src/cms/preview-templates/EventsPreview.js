import React from 'react'
import PropTypes from 'prop-types'
import {EventsPageTemplate} from '../../templates/events-page'

const BookPreview = ({widgetsFor}) => {
  return (
    <EventsPageTemplate
      events={Array.from(
        widgetsFor('events').map(event => {
          let date = event.getIn(['data', 'date'])
          if (date instanceof Date) {
            date = date.toISOString()
          }
          return {
            title: event.getIn(['data', 'title']),
            date,
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
