import React from 'react'
import PropTypes from 'prop-types'

// TODO: discuss this
function ShareTools({ code }) {
  return <div className="c-share-tools js-hover">{code}</div>
}

ShareTools.propTypes = {
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

export default ShareTools
