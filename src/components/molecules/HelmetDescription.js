import React from 'react'
import Helmet from 'react-helmet'

const HelmetDescription = content => (
  <Helmet>
    <meta name="description" content={content} />
  </Helmet>
)
export default HelmetDescription
