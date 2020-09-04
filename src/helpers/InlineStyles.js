import React from 'react'
import PropTypes from 'prop-types'

/**
 * This is a React helper used to inject inline styles
 */
export default function InlineStyles({ styles }) {
  return <style dangerouslySetInnerHTML={{ __html: styles }} type="text/css" />
}

InlineStyles.propTypes = {
  styles: PropTypes.string.isRequired,
}
