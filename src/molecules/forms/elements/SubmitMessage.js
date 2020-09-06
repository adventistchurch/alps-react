import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../../helpers/Element'

export default function SubmitMessage({ text }) {
  return (
    <Div className="messaging" padding color="white" themeBackground="darker">
      <Div fontSize="s" fontType="secondary">
        {text}
      </Div>
    </Div>
  )
}

SubmitMessage.propTypes = {
  text: PropTypes.string.isRequired,
}
