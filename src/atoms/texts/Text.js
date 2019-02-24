import React from 'react'
import PropTypes from 'prop-types'

import useDropcap from '../../helpers/useDropcap'
import getSpacing, { spacingSides, spacingSizes } from '../global/spacing'
import Dropcap from './Dropcap'

function Text({
  as,
  children,
  hasDropcap,
  hasSpacing,
  spacingSize,
  spacingSide,
}) {
  const content = useDropcap(children, { Dropcap, enabled: hasDropcap })
  const dropcap = hasDropcap ? 'has-dropcap' : ''
  const spacing = hasSpacing
    ? getSpacing({
        size: spacingSize,
        side: spacingSide,
      })
    : ''

  return React.createElement(
    as,
    { className: `text ${spacing} ${dropcap}` },
    content
  )
}

Text.propTypes = {
  as: PropTypes.oneOf(['article', 'div', 'section']),
  children: PropTypes.node,
  hasDropcap: PropTypes.bool,
  hasSpacing: PropTypes.bool,
  spacingSide: PropTypes.oneOf(spacingSides),
  spacingSize: PropTypes.oneOf(spacingSizes),
}
Text.defaultProps = {
  as: 'div',
}

export default Text
