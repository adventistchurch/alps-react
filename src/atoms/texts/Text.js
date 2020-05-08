import React from 'react'
import PropTypes from 'prop-types'

import Element, { Paragraph } from '../../helpers/Element'
import useClasses from '../../helpers/useClasses'
import useDropcap from '../../helpers/useDropcap'
import Dropcap from './Dropcap'

function Text({ children, className, hasDropcap, ...props }) {
  const classes = useClasses(
    'text',
    {
      'has-dropcap': hasDropcap,
    },
    className
  )
  const content = useDropcap(children, {
    Dropcap,
    enabled: hasDropcap,
    tags: ['p', Paragraph],
  })

  return (
    <Element {...props} className={classes}>
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
