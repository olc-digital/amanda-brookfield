import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './style.css'

const ThemeContext = React.createContext('light')

export default class TemplateWrapper extends Component {
  state = {
    isModalActive: false,
    bookId: undefined,
  }
  openModal = (e, bookId) => {
    e.preventDefault()
    this.setState({isModalActive: true, bookId})
  }
  closeModal = () => {
    this.setState({isModalActive: false})
  }
  render() {
    return (
      <div className="container">
        <Helmet title="Amanda Brookfield: Official website of the bestselling Penguin author" />
        <Navbar />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.array,
}
