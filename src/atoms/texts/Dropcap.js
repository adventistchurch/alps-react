import React from 'react'
import PropTypes from 'prop-types'

const hideLetter = {
  display: 'none',
}

function Dropcap({ letter }) {
  return (
    <span
      className="o-dropcap u-theme--background-color--base"
      data-letter={letter}
    >
      <span style={hideLetter}>{letter}</span>
    </span>
  )
}

Dropcap.propTypes = {
  letter: PropTypes.string,
}
Dropcap.defaultProps = {}

export default Dropcap
