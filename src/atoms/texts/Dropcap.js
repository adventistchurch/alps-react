import React from 'react'
import PropTypes from 'prop-types'

import { Span } from '../../helpers/Element'

const forceStyle = { fontWeight: 'normal' }

function Dropcap({ letter }) {
  return (
    <>
      <Span
        className="o-dropcap"
        themeBackground="base"
        data-letter={letter[0]}
        style={forceStyle}
      />
      <span hidden>{letter[0]}</span>
    </>
  )
}

Dropcap.propTypes = {
  letter: PropTypes.string.isRequired,
}

export default Dropcap
