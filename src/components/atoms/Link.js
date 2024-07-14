import React from 'react'
import {Link as GatsbyLink} from 'gatsby'

// Restrict Link props that are passed through to avoid errors
const Link = ({to, className, style, children}) => {
  if (!to) {
    return children
  }
  return (
    <GatsbyLink className={className} to={to} style={style}>
      {children}
    </GatsbyLink>
  )
}

export default Link
