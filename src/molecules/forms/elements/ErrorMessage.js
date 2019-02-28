import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../../helpers/Element'

function ErrorMessage({ text }) {
  return (
    <>
      <br />
      <Element
        as="small"
        className="u-color-red"
        fontSize="s"
        fontType="secondary"
      >
        {text}
      </Element>
      <small className="u-font--secondary--s u-color--red">{text}</small>
    </>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
}
ErrorMessage.defaultProps = {}

export default ErrorMessage
