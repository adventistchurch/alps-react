import React from 'react'
import PropTypes from 'prop-types'

const Figure = ({ children, className }) => (
  <figure className={`figure ${className}`}>{children}</figure>
)

Figure.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Figure
