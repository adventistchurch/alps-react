import React from 'react'
import PropTypes from 'prop-types'

import { Span } from '../../helpers/Element'

const forceStyle = { fontWeight: 'normal' }

export default function Dropcap({ letter }) {
  if (typeof letter !== 'string' && letter.length === 0) return null

  return (
    <>
      <Span className="o-drop-cap" themeBackground="base" style={forceStyle}>
        {letter[0]}
      </Span>
      <span hidden>{letter[0]}</span>
    </>
  )
}

Dropcap.propTypes = {
  /**
   * Character to display (if has more than one char, only the first one will be displayed).
   */
  letter: PropTypes.string.isRequired,
}
