import React, {Component, Fragment} from 'react'
import BooksSidebar from '../components/BooksSidebar'

export default class BookPageContainer extends Component {
  state = {
    hoverBookId: undefined,
  }
  handleHoverBook = (e, hoverBookId) => {
    this.setState({hoverBookId})
  }

  render() {
    return (
      <Fragment>
        <BooksSidebar
          handleHoverBook={this.handleHoverBook}
          hoverBookId={this.state.hoverBookId}
        />
        {React.cloneElement(this.props.children, {
          hoverBookId: this.state.hoverBookId,
          handleHoverBook: this.handleHoverBook,
        })}
      </Fragment>
    )
  }
}
