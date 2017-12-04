import React from 'react'
import PropTypes from 'prop-types'

const Svg = ({ children, title, viewBox, className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox={viewBox}
    className={className}
    {...props}
  >
    {title && <title>{title}</title>}
    {children}
  </svg>
)

Svg.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  className: PropTypes.string,
}

export default Svg
