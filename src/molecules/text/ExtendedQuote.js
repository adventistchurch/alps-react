import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const ExtendedQuote = ({ children }) => (
  <Text>
    <blockquote className="quote--extended">{children}</blockquote>
  </Text>
)

ExtendedQuote.propTypes = {
  children: PropTypes.node,
}

export default ExtendedQuote
