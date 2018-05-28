import React, {Component} from 'react'

const books = {
  DEFAULT: {
    title: 'No title selected',
    options: [],
  },
  FTLOAD: {
    title: 'For the Love of a Dog',
    options: [
      {type: 'HEAD_OF_ZEUS', url: 'http://headofzeus.com/books/love-dog'},
      {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/1788542924'},
    ],
  },
  TLC: {
    title: 'The Love Child',
    options: [
      {
        type: 'PENGUIN',
        url: 'https://www.penguin.co.uk/books/179105/the-love-child/',
      },
      {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0718192346'},
    ],
  },
  BIKY: {
    title: 'Before I Knew You',
    options: [
      {
        type: 'PENGUIN',
        url: 'https://www.penguin.co.uk/books/56780/before-i-knew-you/',
      },
      {type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/0141039949'},
    ],
  },
  RL: {
    title: 'Relative Love',
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00H2GYBVO'}],
  },
  AFM: {
    title: 'A Family Man',
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00H2GYBP0'}],
  },
  TL: {
    title: 'The Lover',
    options: [{type: 'AMAZON', url: 'http://www.amazon.co.uk/dp/B00Q8NUXI2'}],
  },
}
const publishers = {
  PENGUIN: {
    name: 'Penguin',
    logo: '',
  },
  AMAZON: {
    name: 'Amazon',
    logo: '',
  },
  HEAD_OF_ZEUS: {
    name: 'Head of Zeus',
    logo: '',
  },
}

const Modal = ({isActive, bookId = 'DEFAULT', closeModal}) => {
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
