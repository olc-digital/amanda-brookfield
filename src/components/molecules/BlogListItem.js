import React from 'react'
import styled from 'styled-components'
import H3 from '../../components/atoms/H3'
import P from '../../components/atoms/P'
import media from '../../styles/mediaQueries'
import CursiveButton from '../../components/atoms/CursiveButton'
import {Link} from 'gatsby'

const BlogItemMeta = styled.div`
  font-style: italic;
  color: ${({theme}) => theme.grey};
`

const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  ${CursiveButton} {
    padding: 0;
    ${media.belowMobile`
      align-self: flex-start;
    `}
  }
  ${media.aboveMobile`
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
  `}
`

const WrapperLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  margin-bottom: 48px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    color: ${({theme}) => theme.grey};
    ${CursiveButton} {
      text-decoration: underline;
    }
  }
`

const BlogListItem = ({id, to, title, excerpt, date, readMoreText}) => (
  <WrapperLink key={id} to={to}>
    <H3 css={'margin-bottom: 4px;'}>{title}</H3>
    <P css={'margin-bottom: 20px;'}>{excerpt}</P>
    <BottomRow>
      <BlogItemMeta css={date && 'margin-bottom: 16px'}>{date}</BlogItemMeta>
      <CursiveButton>{readMoreText || 'Read full blog post >'}</CursiveButton>
    </BottomRow>
  </WrapperLink>
)

export default BlogListItem
