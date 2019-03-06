import React from 'react'
import PropTypes from 'prop-types'

import { Paragraph } from '../../helpers/Element'

function Highlight({ children }) {
  return (
    <Paragraph
      className="o-highlight"
      canBe="dark-dark"
      backgroundColor="gray--light"
      padding
    >
      {children}
    </Paragraph>
  )
}

Highlight.propTypes = {
  children: PropTypes.node,
}

export default Highlight
