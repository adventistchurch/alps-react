import React from 'react'

import Body from './Body'
import { DrawerContextProvider } from './helpers/useDrawerContext'

function Wrapper(props) {
  return (
    <DrawerContextProvider>
      <Body {...props} />
    </DrawerContextProvider>
  )
}

Wrapper.propTypes = Body.propTypes
Wrapper.defaultProps = Body.defaultProps

export default Wrapper
