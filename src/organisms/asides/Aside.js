import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../helpers/Element'

function Aside({ children }) {
  return (
    <Div spacing="double" paddingRight>
      {children}
    </Div>
  )
}

Aside.propTypes = {
  children: PropTypes.node,
}

export default Aside
