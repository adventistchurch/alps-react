import React from 'react'
import PropTypes from 'prop-types'

function InlineStyles({ styles }) {
  return <style type="text/css">{styles}</style>
}

InlineStyles.propTypes = {
  styles: PropTypes.string,
}
InlineStyles.defaultProps = {
  styles: '',
}

export default InlineStyles
