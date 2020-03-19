import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

function InlineStyles({ styles }) {
  const innerHtml = useMemo(() => ({ __html: styles }), [])

  return <style dangerouslySetInnerHTML={innerHtml} type="text/css" />
}

InlineStyles.propTypes = {
  styles: PropTypes.string,
}
InlineStyles.defaultProps = {
  styles: '',
}

export default InlineStyles
