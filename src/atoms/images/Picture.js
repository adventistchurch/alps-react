import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'

function Picture({ image, lazy }) {
  if (!image || !image.srcSet) return null
  const { alt, srcSet } = image

  const { default: defaultImage, ...otherImages } = srcSet

  const sources = Object.keys(otherImages)
    .reverse()
    .map((size, i) => (
      <source
        key={i}
        media={`(min-width: ${size}px)`}
        srcSet={otherImages[size]}
      />
    ))

  return (
    <picture className="picture">
      {sources}
      <Image alt={alt} itemProp="image" lazy={lazy} src={defaultImage} />
    </picture>
  )
}

Picture.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    srcSet: PropTypes.object.isRequired,
  }),
  lazy: PropTypes.bool,
}
Picture.defaultProps = {
  image: { default: '' },
}

export default Picture
