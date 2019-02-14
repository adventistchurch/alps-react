import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'

function Picture({ image, alt, lazy }) {
  const { default: defaultImage, ...otherImages } = image

  const sources = Object.keys(otherImages)
    .reverse()
    .map((minWidth, i) => (
      <Image
        as="source"
        key={i}
        media={`(min-width: ${minWidth}px)`}
        srcSet={image[minWidth]}
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
  alt: PropTypes.string,
  image: PropTypes.object.isRequired,
  lazy: PropTypes.bool,
}
Picture.defaultProps = {
  image: { default: '' },
}

export default Picture
