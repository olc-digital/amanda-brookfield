import React from 'react'
import PropTypes from 'prop-types'
import {HomePageTemplate} from '../../templates/home-page'

const HomePreview = ({entry}) => {
  return <HomePageTemplate welcomeText={entry.getIn(['data', 'welcomeText'])} />
}

HomePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default HomePreview
