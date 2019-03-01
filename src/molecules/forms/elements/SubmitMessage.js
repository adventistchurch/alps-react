import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../../helpers/Element'

function SubmitMessage({ text }) {
  return (
    <Element
      className="messaging"
      padding
      color="white"
      themeBackground="darker"
    >
      <Element fontSize="s" fontType="secondary">
        {text}
      </Element>
    </Element>
  )
}

SubmitMessage.propTypes = {
  text: PropTypes.string.isRequired,
}
SubmitMessage.defaultProps = {}

export default SubmitMessage
