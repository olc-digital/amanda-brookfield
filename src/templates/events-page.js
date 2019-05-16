import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import styled from 'styled-components'

import SubTitle from '../components/atoms/SubTitle'
import Page from '../components/atoms/Page'
import H3 from '../components/atoms/H3'
import Container from '../components/atoms/Container'
import MobileSketchHeading from '../components/molecules/MobileSketchHeading'
import HelmetHelper from '../components/molecules/HelmetHelper'

const Event = styled.div`
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`

export const EventsPageTemplate = ({events}) => {
  console.log('123', events)
  return (
    <Page>
      <HelmetHelper
        title="Events"
        metaDescription="Get up-to-date news of my latest book events and public appearances. Come and meet me and my amazing dog, Mabel, for signings of my new memoir bestseller ‘For the Love of a Dog.’"
      />
      <Container narrow>
        <MobileSketchHeading title="Events" sketchType="events" />
        {events.map(event => (
          <Event key={event.title}>
            <H3>{event.title}</H3>
            <SubTitle css={'margin: 8px 0;'}>
              {event.date &&
                event.date.toLocaleDateString('default', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit',
                })}
            </SubTitle>
            <div>{event.description}</div>
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
