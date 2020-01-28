import React from 'react'
import PropTypes from 'prop-types'

function setStyle(styles) {
  return { __html: styles }
}

function InlineStyles({ styles }) {
  return (
    <style type="text/css" dangerouslySetInnerHTML={setStyle(styles)}></style>
  )
}

InlineStyles.propTypes = {
  styles: PropTypes.string,
}
InlineStyles.defaultProps = {
  styles: '',
}

export default InlineStyles
