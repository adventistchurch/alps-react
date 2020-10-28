import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

export default function InlineStyles({ styles }) {
  const innerHtml = useMemo(() => ({ __html: styles }), [styles])

  return <style dangerouslySetInnerHTML={innerHtml} type="text/css" />
}

InlineStyles.propTypes = {
  styles: PropTypes.string,
}
InlineStyles.defaultProps = {
  styles: '',
}
