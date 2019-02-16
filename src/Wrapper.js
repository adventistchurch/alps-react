import React from 'react'
import PropTypes from 'prop-types'

import { DrawerContextProvider } from './helpers/useDrawerContext'

function Wrapper({ children, primaryColor, secondaryColor, style }) {
  return (
    <DrawerContextProvider>
      <div className={`u-theme--${primaryColor}`} style={style}>
        <div className={`body has-grid u-theme--${secondaryColor}`}>
          {children}
        </div>
      </div>
    </DrawerContextProvider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  style: PropTypes.object,
}
Wrapper.defaultProps = {
  primaryColor: 'ming',
  secondaryColor: '',
}

export default Wrapper
