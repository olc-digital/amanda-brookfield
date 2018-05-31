import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import BooksSidebar from '../components/BooksSidebar'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import './style.css'

export default class MainLayout extends Component {
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
        <Helmet title={this.props.data.site.siteMetadata.title} />
        <Navbar />
        {this.props.location.pathname.match(/^\/books/) && <BooksSidebar />}
        <div>
          {this.props.children({
            ...this.props,
            openModal: this.openModal,
          })}
        </div>
        <Footer />
        <Modal
          isActive={this.state.isModalActive}
          bookId={this.state.bookId}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.func,
}

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
