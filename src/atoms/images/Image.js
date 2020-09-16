import React from 'react'
import PropTypes from 'prop-types'

import { LazyImage } from 'react-lazy-images'

export default function Image({
  alt,
  lazy,
  src,
  className,
  placeholderSrc,
  ...others
}) {
  return lazy ? (
    <LazyImage
      alt={alt}
      src={src}
      placeholder={({ ref }) => (
        <img src={placeholderSrc} ref={ref} className={className} {...others} />
      )}
      actual={({ imageProps }) => (
        <img
          className={className}
          itemProp="image"
          {...imageProps}
          {...others}
        />
      )}
    />
  ) : (
    <img itemProp="image" {...others} />
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  lazy: PropTypes.bool,
  src: PropTypes.string,
  placeholderSrc: PropTypes.string,
}
Image.defaultProps = {
  lazy: true,
}
