import React from 'react'
import PropTypes from 'prop-types'
import Sketch from '../../components/atoms/Sketch'
import {Link} from 'gatsby'

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
        <div>Author</div>
        <Link to="/">
          <Sketch type="events" heading="hello" />
        </Link>
      </>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}
