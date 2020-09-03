import React from 'react'
import PropTypes from 'prop-types'

import LazyLoad from 'react-lazyload'

export default function Image({ alt, lazy, src, ...rest }) {
  const image = <img itemProp="image" src={src} alt={alt} {...rest} />

  return lazy ? (
    <LazyLoad height="100" offset={200} once>
      {image}
    </LazyLoad>
  ) : (
    image
  )
}

Image.propTypes = {
  /**
   * Image's alternative text
   */
  alt: PropTypes.string.isRequired,
  /**
   * Image will be loaded only when is in in the viewport
   */
  lazy: PropTypes.bool,
  /**
   * Image's source
   */
  src: PropTypes.string.isRequired,
}
Image.defaultProps = {
  lazy: true,
}
