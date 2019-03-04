import React from 'react'
import {Link as GatsbyLink} from 'gatsby'

const LinkWithRestrictedProps = ({to, className, children}) => (
  <GatsbyLink className={className} to={to}>
    {children}
  </GatsbyLink>
)

export default LinkWithRestrictedProps
