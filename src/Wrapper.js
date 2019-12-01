import React from 'react'

import Body from './Body'
import { DrawerContextProvider } from './helpers/useDrawerContext'
import { LinkContentProvider } from './helpers/useLinkContext'

function Wrapper({ LinkWrapper, ...props }) {
  return (
    <LinkContentProvider LinkWrapper={LinkWrapper}>
      <DrawerContextProvider>
        <Body {...props} />
      </DrawerContextProvider>
    </LinkContentProvider>
  )
}

Wrapper.propTypes = Body.propTypes
Wrapper.defaultProps = Body.defaultProps

export default Wrapper
