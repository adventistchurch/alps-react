import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../helpers/Element'

function Aside({ children }) {
  return (
    <Div spacingSize="double" paddingSide="right">
      {children}
    </Div>
  )
}

Aside.propTypes = {
  children: PropTypes.node,
}

export default Aside
