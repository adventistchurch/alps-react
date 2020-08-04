import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'

function Blockquote({ children, text }) {
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
  children: PropTypes.node,
  text: PropTypes.string,
}

export default Blockquote
