import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

function Intro({ children, text }) {
  return (
    <Text as="p" className="o-intro">
      {children || text}
    </Text>
  )
}

Intro.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

export default Intro
