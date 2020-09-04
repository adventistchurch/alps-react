import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'

export default function Blockquote({ children, text }) {
  return (
    <Element
      as="blockquote"
      className="pullquote"
      paddingRight
      themeColor="darker"
      themeBorder="darker"
      themeBorderSide="left"
    >
      {children ? children : <p>{text}</p>}
    </Element>
  )
}

Blockquote.propTypes = {
  /**
   * Sets content as children (prevails over `text` prop).
   */
  children: PropTypes.node,
  /**
   * Sets content and wraps it in a `<p>` tag.
   */
  text: PropTypes.string,
}
