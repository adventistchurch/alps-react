import React from 'react'
import PropTypes from 'prop-types'

function ExtendedQuote({ children, ...props }) {
  return (
    <div className="text">
      <blockquote className="quote--extended" {...props}>
        {children}
      </blockquote>
    </div>
  )
}

ExtendedQuote.propTypes = {
  children: PropTypes.node,
}

export default ExtendedQuote
