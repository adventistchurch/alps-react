import React from 'react'
import PropTypes from 'prop-types'

import Element from '../helpers/Element'

function Main({ children, paddingSide, paddingSize, spacingSize, ...props }) {
  return (
    <Element
      {...props}
      as="main"
      className="l-main"
      paddingSide={paddingSide}
      paddingSize={paddingSize}
      spacingSize={spacingSize}
      role="main"
    >
      {children}
    </Element>
  )
}

Main.propTypes = {
  children: PropTypes.node,
  ...Element.propTypes,
}
Main.defaultProps = {
  paddingSide: 'bottom',
  paddingSize: 'double',
  spacingSize: 'double',
}

export default Main
