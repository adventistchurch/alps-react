import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'

function Sources({ image }) {
  return Object.keys(image)
    .reverse()
    .map((x, i) => (
      <source key={i} srcSet={image[x]} media={`(min-width: ${x}px)`} />
    ))
}

function Picture({ image, alt, lazy }) {
  const { default: defaultImages, ...otherImages } = image

  return (
    <picture className="picture">
      <Sources image={{ ...otherImages }} />
      <Image alt={alt} itemProp="image" lazy={lazy} srcSet={defaultImages} />
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
