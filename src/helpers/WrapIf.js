import React from 'react'
import PropTypes from 'prop-types'

const WrapIf = ({ condition, wrapper, children }) =>
  condition ? <wrapper>{children}</wrapper> : children

WrapIf.propTypes = {
  condition: PropTypes.bool,
  wrapper: PropTypes.element,
  children: PropTypes.node,
}
WrapIf.defaultProps = {
  condition: false,
}

export default WrapIf
