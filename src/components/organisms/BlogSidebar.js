import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {resetList} from '../../styles/mixins'

import H3 from '../atoms/H3'

const Aside = styled.aside`
  width: 168px;
  flex: 1 0 auto;
  margin-right: 24px;
`
const List = styled.ul`
  ${resetList}
`
const ListItem = styled.li`
  margin-bottom: 10px;
  a {
    color: ${({theme}) => theme.black};
    text-decoration: none;
    &:hover {
      color: ${({theme}) => theme.red};
      text-decoration: underline;
    }
  }
`

const BlogSidebarBlock = ({title, items}) => (
  <div css={'margin-bottom: 48px;'}>
    <H3 css={'margin-bottom: 10px;'}>{title}</H3>
    <List>
      {items.map(({id, to, title}) => (
        <ListItem key={id}>
          <Link to={to}>{title}</Link>
        </ListItem>
      ))}
    </List>
  </div>
)
const BlogSidebar = ({
  posts,
  //years,
  className,
}) => {
  return (
    <Aside className={className}>
      <BlogSidebarBlock
        title="Recent Posts"
        items={posts.slice(0, 5).map(({node: post}) => ({
          id: post.id,
          to: post.fields.slug,
          title: post.frontmatter.title,
        }))}
      />
      {/* <BlogSidebarBlock
        title="Archive"
        items={years
          .map(({fieldValue: year, totalCount}, i) => ({
            title: `${year} (${totalCount})`,
            to: `/blog/years/${year}/`,
            id: i,
          }))
          .reverse()}
      /> */}
    </Aside>
  )
}

export default BlogSidebar
