import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import './style.css'

const TemplateWrapper = ({children}) => (
  <div className="container">
    <Helmet title="Amanda Brookfield: Official website of the bestselling Penguin author" />
    <Navbar />
    <Sidebar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
