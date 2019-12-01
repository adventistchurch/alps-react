import React, { useContext } from 'react'
import PropTypes from 'prop-types'

export const LinkContext = React.createContext()

export function LinkContentProvider({ children, LinkWrapper }) {
  return (
    <LinkContext.Provider value={LinkWrapper}>{children}</LinkContext.Provider>
  )
}

export default function useLinkContext() {
  return useContext(LinkContext)
}

LinkContentProvider.propTypes = {
  children: PropTypes.node,
  LinkWrapper: PropTypes.func,
}
