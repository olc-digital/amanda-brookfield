import React, {Fragment, Component} from 'react'
import Link from 'gatsby-link'
import {books} from '../../data'

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
    return (
      <Fragment>
        <Modal
          isActive={this.state.isModalActive}
          bookId={this.state.bookId}
          closeModal={this.closeModal}
        />
        <div className="bookscontent" style={{width: '680px'}}>
          <div id="grid">
            {Object.entries(books).map(([key, book]) => (
              <Link to={book.link} key={key} className="hoverfade">
                <img src={book.covers.grid} alt={book.title} />
              </Link>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}
