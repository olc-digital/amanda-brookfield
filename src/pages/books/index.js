import React, {Fragment, Component} from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {books, metaDescriptions} from '../../data'
import Modal from '../../components/Modal'

export default class BooksPage extends Component {
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
    const {handleHoverBook, hoverBookId} = this.props
    return (
      <Fragment>
        <Helmet>
          <meta name="description" content={metaDescriptions.books} />
        </Helmet>
        <Modal
          isActive={this.state.isModalActive}
          bookId={this.state.bookId}
          closeModal={this.closeModal}
        />
        <div className="bookscontent" style={{width: '680px'}}>
          <div id="grid">
            {Object.entries(books).map(([key, book]) => (
              <Link
                to={book.link}
                key={key}
                onMouseEnter={e => {
                  handleHoverBook(e, book.slug)
                }}
                onMouseLeave={e => {
                  handleHoverBook(e, undefined)
                }}
              >
                <img
                  className={
                    'hoverbook ' + (hoverBookId === book.slug && 'hoverbooknow')
                  }
                  src={book.covers.grid}
                  alt={book.title}
                />
              </Link>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}
