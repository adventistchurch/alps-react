import React from 'react'
import PropTypes from 'prop-types'

import { Span } from '../../helpers/Element'

function Dropcap({ letter }) {
  return (
    <>
      <Span
        className="o-dropcap"
        themeBackground="base"
        data-letter={letter[0]}
      />
      <span hidden>{letter[0]}</span>
    </>
  )
}

Dropcap.propTypes = {
  letter: PropTypes.string.isRequired,
}

export default Dropcap
