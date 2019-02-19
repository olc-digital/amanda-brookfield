import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BookWidget from '../../components/molecules/BookWidget'
import {books} from '../../data'
import H2 from '../../components/atoms/H2'
import Container from '../../components/atoms/Container'
import media from '../../styles/mediaQueries'
import {MobileOnly} from '../../components/atoms/Responsive'
import Sketch from '../../components/atoms/Sketch'

const booksArray = Object.values(books)

const BooksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-right: -30px;
  & > div {
    margin-right: 30px;
    margin-bottom: 24px;
  }
  ${media.belowMobile`
    margin-right: -16px;
    & > div {
    margin-right: 16px;
  }
  `}
`
export default class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Container>
          <MobileOnly>
            <Sketch style={{marginTop: 48}} center type="books" />
            <H2 margin>Books</H2>
          </MobileOnly>
          <BooksWrapper>
            {booksArray.map(book => (
              <BookWidget key={book.id} {...book} />
            ))}
          </BooksWrapper>
        </Container>
      </>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}
