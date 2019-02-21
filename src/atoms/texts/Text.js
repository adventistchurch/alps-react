import React from 'react'
import PropTypes from 'prop-types'

import getSpacing, { spacingSides, spacingSizes } from '../global/spacing'

function Text({ children, hasDropcap, hasSpacing, spacingSize, spacingSide }) {
  const dropcap = hasDropcap ? 'has-dropcap' : ''
  const spacing = hasSpacing
    ? getSpacing({
        size: spacingSize,
        side: spacingSide,
      })
    : ''

  return <div className={`text ${spacing} ${dropcap}`}>{children}</div>
}

Text.propTypes = {
  children: PropTypes.node,
  hasDropcap: PropTypes.bool,
  hasSpacing: PropTypes.bool,
  spacingSide: PropTypes.oneOf(spacingSides),
  spacingSize: PropTypes.oneOf(spacingSizes),
}

export default Text
