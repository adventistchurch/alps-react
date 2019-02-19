import React from 'react'
import PropTypes from 'prop-types'

function Blockquote({ children, text }) {
  return (
    <blockquote className="pullquote u-theme--border-color--darker--left u-theme--color--darker u-padding--right">
      {children ? children : <p>{text}</p>}
    </blockquote>
  )
}

Blockquote.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

export default Blockquote
