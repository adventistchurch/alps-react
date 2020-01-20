import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../../helpers/Element'

function ErrorMessage({ text }) {
  return (
    <Element
      as="small"
      color="error"
      fontSize="s"
      fontType="secondary"
      clearFix
    >
      {text}
    </Element>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ErrorMessage
