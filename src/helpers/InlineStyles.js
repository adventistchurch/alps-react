import React from 'react'
import PropTypes from 'prop-types'

export default function InlineStyles({ styles }) {
  return <style dangerouslySetInnerHTML={{ __html: styles }} type="text/css" />
}

InlineStyles.propTypes = {
  styles: PropTypes.string.isRequired,
}
