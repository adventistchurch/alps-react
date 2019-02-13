import React from 'react'
import PropTypes from 'prop-types'

const Aside = ({ children }) => (
  <div className="u-spacing--double u-padding--right">
    <div className="pad--secondary spacing--double">{children}</div>
  </div>
)

Aside.propTypes = {
  children: PropTypes.node,
}

export default Aside
