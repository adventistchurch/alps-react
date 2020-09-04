import React from 'react'
import PropTypes from 'prop-types'

import { Span } from '../../helpers/Element'

export default function Kicker({ color, text }) {
  return (
    <Span themeColor={color}>
      <em>{text}</em>
    </Span>
  )
}

Kicker.propTypes = {
  /**
   * Defines kicker color (based on theme).
   */
  color: PropTypes.oneOf(['base', 'darker']),
  /**
   * Sets content.
   */
  text: PropTypes.string.isRequired,
}
Kicker.defaultProps = {
  color: 'base',
}
