import React from 'react'
import PropTypes from 'prop-types'

const WrapIf = ({ condition, Wrapper, children }) =>
  condition ? <Wrapper>{children}</Wrapper> : children

WrapIf.propTypes = {
  condition: PropTypes.any.isRequired,
  Wrapper: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  children: PropTypes.node.isRequired,
}
WrapIf.defaultProps = {
  condition: false,
}

export default WrapIf
