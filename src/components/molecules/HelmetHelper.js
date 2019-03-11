import React from 'react'
import Helmet from 'react-helmet'

const HelmetHelper = ({title, content}) => (
  <Helmet titleTemplate="%s | Amanda Brookfield, Best-Selling Novelist">
    <title>{title}</title>
    <meta name="description" content={content} />
  </Helmet>
)
export default HelmetHelper
