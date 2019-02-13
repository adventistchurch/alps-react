import React from 'react'
import PropTypes from 'prop-types'

const Kicker = ({ text, className }) => (
  <h4
    className={`c-media-block__kicker c-block__kicker u-space--quarter--bottom ${className}`}
  >
    {text}
  </h4>
)
Kicker.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}
Kicker.defaultProps = {
  className: '',
}

export default Kicker
