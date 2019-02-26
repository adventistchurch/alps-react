import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import useDropcap from '../../helpers/useDropcap'
import Dropcap from './Dropcap'

function Text({ as, children, hasDropcap, ...props }) {
  const content = useDropcap(children, { Dropcap, enabled: hasDropcap })
  const dropcap = hasDropcap ? 'has-dropcap' : ''

  return (
    <Element {...props} tag={as} className={`text ${dropcap}`}>
      {content}
    </Element>
  )
}

Text.propTypes = {
  ...Element.propTypes,
  as: PropTypes.oneOf(['article', 'div', 'p', 'section', 'span']),
  children: PropTypes.node,
  hasDropcap: PropTypes.bool,
}
Text.defaultProps = {
  as: 'div',
}

export default Text
