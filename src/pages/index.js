import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    return <Layout>HOME</Layout>
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}
