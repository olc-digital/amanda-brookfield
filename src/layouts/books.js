import React from 'react'
import PropTypes from 'prop-types'

import BaseLayout from './_base'
import BooksSidebar from '../components/BooksSidebar'

const TemplateWrapper = ({children}) => {
  return (
    <BaseLayout>
      <BooksSidebar />
      {children()}
    </BaseLayout>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
