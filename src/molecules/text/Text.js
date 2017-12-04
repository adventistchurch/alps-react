import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ children, className }) => (
  <div className={`text  ${className}`}>{children}</div>
)

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Text
