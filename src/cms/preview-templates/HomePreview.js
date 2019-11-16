import React from 'react'
import {HomePageTemplate} from '../../templates/home-page'

const HomePreview = ({entry, fieldsMetaData}) => {
  console.log('entry', entry.toJS())
  console.log('meta', fieldsMetaData.toJS()) //For example, the Relation widget passes the whole selected relation data in fieldsMetaData.
  return <HomePageTemplate welcomeText={entry.getIn(['data', 'welcomeText'])} />
}

export default HomePreview
