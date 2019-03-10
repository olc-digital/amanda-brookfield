import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BookWidget from '../../components/molecules/BookWidget'
import {books} from '../../data'
import MobileSketchHeading from '../../components/molecules/MobileSketchHeading'
import Container from '../../components/atoms/Container'
import media from '../../styles/mediaQueries'
import Page from '../../components/atoms/Page'

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
      <Page>
        <Container>
          <MobileSketchHeading title="Books" sketchType="books" />
          <BooksWrapper>
            {booksArray.map(book => (
              <BookWidget key={book.id} {...book} />
            ))}
          </BooksWrapper>
        </Container>
      </Page>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}
