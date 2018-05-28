import React from 'react'
import PropTypes from 'prop-types'

import BaseLayout from './_base'

const TemplateWrapper = ({children}) => {
  return <BaseLayout>{children()}</BaseLayout>
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
