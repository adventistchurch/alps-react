import React from 'react'
import PropTypes from 'prop-types'
import Script from 'react-load-script'

const LoadScript = props => <Script {...props} />

LoadScript.propTypes = {
  url: PropTypes.string.isRequired,
  onCreate: PropTypes.func,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
}
LoadScript.defaultProps = {
  onCreate: () => null,
  onLoad: () => null,
  onError: () => console.error('Error loading ALPS JS!'),
}

export default LoadScript
