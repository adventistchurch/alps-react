import React from 'react'
import PropTypes from 'prop-types'

import { Span } from '../../helpers/Element'

const forceStyle = { fontWeight: 'normal' }

function Dropcap({ letter }) {
  return (
    <>
      <Span className="o-drop-cap" themeBackground="base" style={forceStyle}>
        {letter}
      </Span>
      <span hidden>{letter}</span>
    </>
  )
}

Dropcap.propTypes = {
  letter: PropTypes.string.isRequired,
}

export default Dropcap
