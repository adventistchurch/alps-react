import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

export default function Intro({ children, text }) {
  return (
    <Text as="p" className="o-intro">
      {children || text}
    </Text>
  )
}

Intro.propTypes = {
  /**
   * Sets content as children (prevails over `text` prop).
   */
  children: PropTypes.node,
  /**
   * Sets content.
   */
  text: PropTypes.string,
}
