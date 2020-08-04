import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../helpers/Element'

function BodyContent({ children }) {
  return <Div spacing="triple">{children}</Div>
}

BodyContent.propTypes = {
  children: PropTypes.node,
}

export default BodyContent
