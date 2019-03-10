import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import styled from 'styled-components'

import Page from '../components/atoms/Page'
import H3 from '../components/atoms/H3'
import P from '../components/atoms/P'
import Container from '../components/atoms/Container'
import MobileSketchHeading from '../components/molecules/MobileSketchHeading'

const Event = styled.div`
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`

const EventDate = styled.div`
  color: ${({theme}) => theme.red};
  font-style: italic;
  margin: 8px 0 8px;
`

const EventsPageTemplate = ({events}) => {
  return (
    <Page>
      <Container narrow>
        <MobileSketchHeading title="Events" sketchType="events" />
        {events.map(event => (
          <Event key={event.title}>
            <H3>{event.title}</H3>
            <EventDate>{event.date}</EventDate>
            <P css={'margin:0;'}>{event.description}</P>
          </Event>
        ))}
      </Container>
    </Page>
  )
}

EventsPageTemplate.propTypes = {
  events: PropTypes.array.isRequired,
}

const EventsPage = ({data}) => {
  const {markdownRemark: post} = data

  return <EventsPageTemplate events={post.frontmatter.events} />
}

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EventsPage

export const eventPageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        events {
          title
          date(formatString: "dddd Do MMMM, YYYY")
          description
        }
      }
    }
  }
`
