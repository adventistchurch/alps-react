import React from 'react'
import PropTypes from 'prop-types'

import 'intersection-observer' // Polyfill required for react-lazy-images

import { DrawerContextProvider } from './helpers/useDrawerContext'
import { LinkContextProvider } from './helpers/useLinkContext'

export default function AlpsContextProvider({ LinkWrapper, children }) {
  return (
    <LinkContextProvider LinkWrapper={LinkWrapper}>
      <DrawerContextProvider>{children}</DrawerContextProvider>
    </LinkContextProvider>
  )
}

AlpsContextProvider.propTypes = {
  children: PropTypes.node,
  LinkWrapper: PropTypes.func,
}

export { DrawerContextProvider, LinkContextProvider }
