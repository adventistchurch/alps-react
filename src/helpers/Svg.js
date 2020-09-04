import React from 'react'
import PropTypes from 'prop-types'

import Element from './Element'

/**
 * This is a React helper to wrap SVG graphics.
 */
export default function Svg({ children, title, ...props }) {
  return (
    <Element
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      {title && <title>{title}</title>}
      {children}
    </Element>
  )
}

Svg.propTypes = {
  /**
   * SVG contents
   */
  children: PropTypes.node.isRequired,
  /**
   * SVG title
   */
  title: PropTypes.string,
  /**
   * SVG View Box (should match children cordinates)
   */
  viewBox: PropTypes.string,
  /**
   * Extra classnames
   */
  className: PropTypes.string,
}
