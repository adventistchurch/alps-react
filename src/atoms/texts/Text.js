import React from 'react'
import PropTypes from 'prop-types'

import Element, { Paragraph } from '../../helpers/Element'
import useClasses from '../../helpers/useClasses'
import useDropcap from '../../helpers/useDropcap'
import Dropcap from './Dropcap'

export default function Text({ children, className, hasDropcap, ...props }) {
  const classes = useClasses(
    'text',
    {
      'has-drop-cap': hasDropcap,
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
  /**
   * Sets the tag element used in as wrapping element.
   */
  as: PropTypes.oneOf(['article', 'div', 'p', 'section', 'span']),
  /**
   * Sets content as children.
   */
  children: PropTypes.node,
  /**
   * Defines if a dropcap will be shown.
   */
  hasDropcap: PropTypes.bool,
}
Text.defaultProps = {
  as: 'div',
}
