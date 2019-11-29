import React, { useContext } from 'react'
import PropTypes from 'prop-types'

export const LinkContext = React.createContext()

export function LinkContentProvider({ children, Wrapper }) {
  return <LinkContext.Provider value={Wrapper}>{children}</LinkContext.Provider>
}

export default function useLinkContext() {
  return useContext(LinkContext)
}

LinkContentProvider.propTypes = {
  children: PropTypes.node,
  Wrapper: PropTypes.func,
}
