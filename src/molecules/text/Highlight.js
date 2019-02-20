import React from 'react'
import PropTypes from 'prop-types'

function Highlight({ children }) {
  return (
    <p className="o-highlight u-padding u-background-color--gray--light can-be--dark-dark">
      {children}
    </p>
  )
}

Highlight.propTypes = {
  children: PropTypes.node,
}

export default Highlight
