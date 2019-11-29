import React from 'react'
import PropTypes from 'prop-types'

import Element, { Paragraph } from '../../helpers/Element'
import useDropcap from '../../helpers/useDropcap'
import Dropcap from './Dropcap'

function Text({ children, className, hasDropcap, ...props }) {
  const content = useDropcap(children, {
    Dropcap,
    enabled: hasDropcap,
    tags: ['p', Paragraph],
  })
  const classes = ['text']

  if (className) classes.push(className)
  if (hasDropcap) classes.push('has-dropcap')

  return (
    <Element {...props} className={classes.join(' ')}>
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
