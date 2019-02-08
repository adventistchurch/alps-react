import React from 'react'
import PropTypes from 'prop-types'

const Highlight = ({ children }) => (
  <p className="o-highlight u-padding u-background-color--gray--light can-be--dark-dark">
    {children}
  </p>
)

Highlight.propTypes = {
  children: PropTypes.string,
}

export default Highlight
