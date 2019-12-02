import React from 'react'

import Body from './Body'
import { DrawerContextProvider } from './helpers/useDrawerContext'
import { LinkContextProvider } from './helpers/useLinkContext'

function Wrapper({ LinkWrapper, ...props }) {
  return (
    <LinkContextProvider LinkWrapper={LinkWrapper}>
      <DrawerContextProvider>
        <Body {...props} />
      </DrawerContextProvider>
    </LinkContextProvider>
  )
}

Wrapper.propTypes = Body.propTypes
Wrapper.defaultProps = Body.defaultProps

export { Body, DrawerContextProvider, LinkContextProvider }

export default Wrapper
