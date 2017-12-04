import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ src, alt, className, lazy, ...other }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className + (lazy ? ' lazy' : '')}
      itemProp="image"
      {...other}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  lazy: PropTypes.bool,
}
Image.defaultProps = {
  lazy: false,
}

export default Image
