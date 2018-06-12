import React, {Component, Fragment as Frag} from 'react'

export default class BookInfo extends Component {
  state = {
    isShowingReviews: false,
  }
  showReviews = e => {
    e.preventDefault()
    this.setState({isShowingReviews: true})
  }
  hideReviews = e => {
    e.preventDefault()
    this.setState({isShowingReviews: false})
  }
  render() {
    const {openModal, blurb, reviews, cover, bookId} = this.props
    return (
      <div>
        <div className="bookscontent">
          <div className="booknav booksheading">
            <a href="#" onClick={this.hideReviews} className="aboutbooklink">
              About
            </a>
            {reviews && (
              <Frag>
                {' '}|{' '}
                <a
                  href="#"
                  onClick={this.showReviews}
                  className="reviewbooklink"
                >
                  Reviews
                </a>
              </Frag>
            )}
          </div>
          <img className="cover" src={cover} />
          <div className="booktext">
            {this.state.isShowingReviews ? (
              <div
                className="bookreviews"
                dangerouslySetInnerHTML={{__html: reviews}}
              />
            ) : (
              <div
                className="bookabout"
                dangerouslySetInnerHTML={{__html: blurb}}
              />
            )}

            <div className="bookbuy">
              <a
                href="#"
                className="readmore button"
                onClick={e => {
                  openModal(e, bookId)
                }}
              >
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
