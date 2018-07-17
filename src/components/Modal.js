import React from 'react'
import {books, publishers} from '../data'

const Modal = ({isActive, bookId = 'ftload', closeModal}) => {
  console.log(bookId)
  return (
    <div className={'modal ' + (isActive && 'is-active')}>
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-content">
        <div className="buycontainer">
          <div className="buytitle aries">
            <div className="buytitlemargin oneoption">
              {books[bookId].title}
            </div>
          </div>
          <div className="buyoptions">
            {books[bookId].options.map(({type, url}, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer">
                <img src={publishers[type].logo} />
                <div style={{paddingTop: '8px'}}>{publishers[type].name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
