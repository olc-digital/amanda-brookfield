import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BookWidget from '../../components/molecules/BookWidget'
import {books} from '../../data'
import MobileSketchHeading from '../../components/molecules/MobileSketchHeading'
import Container from '../../components/atoms/Container'
import media from '../../styles/mediaQueries'
import Page from '../../components/atoms/Page'
import H2 from '../../components/atoms/H2'
import BlogListItem from '../../components/molecules/BlogListItem'

const booksArray = Object.values(books)

const BooksWrapper = styled.section`
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

const ArticleSection = styled.section`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  ${media.aboveMobile`
    flex-direction: row;
    margin-top: 72px;
  `}
`

const ArticleList = ({title, items}) => (
  <div css={'flex: 1 0 auto;'}>
    <H2>{title}</H2>
    <div>
      {items.map(item => (
        <BlogListItem key={item.id} {...item} />
      ))}
    </div>
  </div>
)
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
          <ArticleSection>
            <ArticleList title="Articles" items={[{id: '1', to: 'x'}]} />
            <ArticleList title="Short Stories" items={[{id: '1', to: 'x'}]} />
          </ArticleSection>
        </Container>
      </Page>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}
