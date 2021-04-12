import React, { useContext } from 'react'
import PropTypes from 'prop-types'

export const AssetsContext = React.createContext()

export function AssetsContextProvider({ children, publicAssetsPath }) {
  return (
    <AssetsContext.Provider value={publicAssetsPath}>
      {children}
    </AssetsContext.Provider>
  )
}

export default function useAssetsContext() {
  return useContext(AssetsContext)
}

AssetsContextProvider.propTypes = {
  children: PropTypes.node,
  publicAssetsPath: PropTypes.string,
}
