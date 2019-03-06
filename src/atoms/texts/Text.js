import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import useDropcap from '../../helpers/useDropcap'
import Dropcap from './Dropcap'

function Text({ as, children, className, hasDropcap, ...props }) {
  const content = useDropcap(children, { Dropcap, enabled: hasDropcap })
  const classes = ['text']

  if (className) classes.push(className)
  if (hasDropcap) classes.push('has-dropcap')

  return (
    <Element {...props} tag={as} className={classes.join(' ')}>
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
  className: '',
}

export default Text
