import React from 'react'
import PropTypes from 'prop-types'
import MobileSketchHeading from '../../components/molecules/MobileSketchHeading'

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
        <MobileSketchHeading title="Events" sketchType="events" />
        <div>Events</div>
        <div />
      </>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}
