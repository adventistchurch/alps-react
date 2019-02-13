import React from 'react'
import PropTypes from 'prop-types'

function Kicker({ color, text }) {
  return (
    <span className={`u-theme--color--${color}`}>
      <em>{text}</em>
    </span>
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
