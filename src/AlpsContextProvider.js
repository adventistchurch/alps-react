import React from 'react'
import PropTypes from 'prop-types'

import { ImageProvider } from './context/ImageContext'
import { DrawerContextProvider } from './helpers/useDrawerContext'
import { LinkContextProvider } from './helpers/useLinkContext'
import { AssetsContextProvider } from './helpers/useAssetsContext'

export default function AlpsContextProvider({
  children,
  ImageComponent,
  LinkWrapper,
  publicAssetsPath,
}) {
  return (
    <AssetsContextProvider publicAssetsPath={publicAssetsPath}>
      <LinkContextProvider LinkWrapper={LinkWrapper}>
        <ImageProvider ImageComponent={ImageComponent}>
          <DrawerContextProvider>{children}</DrawerContextProvider>
        </ImageProvider>
      </LinkContextProvider>
    </AssetsContextProvider>
  )
}

AlpsContextProvider.propTypes = {
  children: PropTypes.node,
  ImageComponent: PropTypes.func,
  LinkWrapper: PropTypes.func,
  publicAssetsPath: PropTypes.string,
}

export {
  AssetsContextProvider,
  DrawerContextProvider,
  LinkContextProvider,
  ImageProvider,
}
