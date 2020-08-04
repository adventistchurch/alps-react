import React from 'react'
import PropTypes from 'prop-types'

import Element from '../helpers/Element'

function Main({ children, spacing, ...props }) {
  return (
    <Element
      {...props}
      as="main"
      className="l-main"
      spacing={spacing}
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
  paddingBottom: 'double',
  spacing: 'double',
}

export default Main
