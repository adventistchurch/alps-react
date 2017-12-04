import React from 'react'
import PropTypes from 'prop-types'

const Aside = ({ children }) => (
  <aside className="aside spacing--double">
    <div className="pad--secondary spacing--double">{children}</div>
  </aside>
)

Aside.propTypes = {
  children: PropTypes.node,
}

export default Aside
