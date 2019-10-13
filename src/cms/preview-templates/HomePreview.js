import React from 'react'
import {HomePageTemplate} from '../../templates/home-page'

const HomePreview = ({entry}) => {
  return <HomePageTemplate welcomeText={entry.getIn(['data', 'welcomeText'])} />
}

export default HomePreview
