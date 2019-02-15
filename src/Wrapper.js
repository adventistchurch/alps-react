import React from 'react'
import PropTypes from 'prop-types'

import { MenuContextProvider } from './helpers/useMenuContext'

function Wrapper({ children, primaryColor, secondaryColor, style }) {
  return (
    <MenuContextProvider>
      <div className={`u-theme--${primaryColor}`} style={style}>
        <div className={`body has-grid u-theme--${secondaryColor}`}>
          {children}
        </div>
      </div>
    </MenuContextProvider>
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
