import React from 'react'
import PropTypes from 'prop-types'

import LazyLoad from 'react-lazyload'

function Image({ lazy, ...others }) {
  const image = <img itemProp="image" {...others} />

  return lazy ? <LazyLoad>{image}</LazyLoad> : image
}

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  lazy: PropTypes.bool,
  src: PropTypes.string,
}
Image.defaultProps = {
  lazy: false,
}

export default Image
