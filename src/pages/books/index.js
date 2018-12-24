import React from 'react'
import PropTypes from 'prop-types'

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
        <div>Books</div>
        <div />
      </>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}
