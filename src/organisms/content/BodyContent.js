import React from 'react'
import PropTypes from 'prop-types'

function BodyContent({ children }) {
  return <div className="u-spacing--triple">{children}</div>
}

BodyContent.propTypes = {
  children: PropTypes.node,
}

export default BodyContent
