import React from 'react'
import PropTypes from 'prop-types'

function Text({ children }) {
  return <div className="text">{children}</div>
}

Text.propTypes = {
  children: PropTypes.node,
}

export default Text
