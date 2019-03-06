import React from 'react'
import PropTypes from 'prop-types'

import Text from '../../atoms/texts/Text'

function ExtendedQuote({ children, ...props }) {
  return (
    <Text>
      <blockquote className="quote--extended" {...props}>
        {children}
      </blockquote>
    </Text>
  )
}

ExtendedQuote.propTypes = {
  children: PropTypes.node,
}

export default ExtendedQuote
