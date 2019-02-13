import React from 'react'
import PropTypes from 'prop-types'

const ExtendedQuote = ({ children }) => (
  <div className="text">
    <blockquote className="quote--extended">{children}</blockquote>
  </div>
)

ExtendedQuote.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

export default ExtendedQuote
