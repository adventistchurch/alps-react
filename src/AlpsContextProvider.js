import React from 'react'
import PropTypes from 'prop-types'

import 'intersection-observer' // Polyfill required for react-lazy-images

import { DrawerContextProvider } from './helpers/useDrawerContext'
import { LinkContextProvider } from './helpers/useLinkContext'
import { AssetsContextProvider } from './helpers/useAssetsContext'

export default function AlpsContextProvider({
  LinkWrapper,
  publicAssetsPath,
  children,
}) {
  return (
    <AssetsContextProvider publicAssetsPath={publicAssetsPath}>
      <LinkContextProvider LinkWrapper={LinkWrapper}>
        <DrawerContextProvider>{children}</DrawerContextProvider>
      </LinkContextProvider>
    </AssetsContextProvider>
  )
}

AlpsContextProvider.propTypes = {
  children: PropTypes.node,
  LinkWrapper: PropTypes.func,
  publicAssetsPath: PropTypes.string,
}

export { AssetsContextProvider, DrawerContextProvider, LinkContextProvider }
