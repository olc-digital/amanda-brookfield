import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import styled from 'styled-components'

const LongContent = styled.div`
  height: 2000px;
  width: 100px;
  background: deepskyblue;
`
export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        HOME
        <LongContent />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}
