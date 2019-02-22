import React from 'react'
import PropTypes from 'prop-types'

function Dropcap({ letter }) {
  return (
    <>
      <span
        className="o-dropcap u-theme--background-color--base"
        data-letter={letter}
      />
      <span hidden>{letter}</span>
    </>
  )
}

Dropcap.propTypes = {
  letter: PropTypes.string,
}
Dropcap.defaultProps = {}

export default Dropcap
