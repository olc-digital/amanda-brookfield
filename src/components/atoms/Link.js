import React from 'react'
import {Link as GatsbyLink} from 'gatsby'

const LinkWithRestrictedProps = ({to, className, children}) => {
  if (!to) {
    return children
  }
  return (
    <GatsbyLink className={className} to={to}>
      {children}
    </GatsbyLink>
  )
}

export default LinkWithRestrictedProps
