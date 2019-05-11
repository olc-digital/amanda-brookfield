import React from 'react'
import Helmet from 'react-helmet'

const HelmetHelper = ({title, metaDescription}) => (
  <Helmet titleTemplate="%s | Amanda Brookfield, Best-Selling Novelist">
    <title>{title}</title>
    <meta name="description" content={metaDescription} />
  </Helmet>
)
export default HelmetHelper
