import React from 'react'
import PropTypes from 'prop-types'

import { Span } from '../../helpers/Element'

function Kicker({ color, text }) {
  return (
    <Span themeColor={color}>
      <em>{text}</em>
    </Span>
  )
}

Kicker.propTypes = {
  color: PropTypes.oneOf(['base', 'darker']),
  text: PropTypes.string.isRequired,
}
Kicker.defaultProps = {
  color: 'base',
}

export default Kicker
