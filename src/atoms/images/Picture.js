import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Image from './Image'

export default function Picture({ image, lazy, style }) {
  const { alt, srcSet } = image || {}

  const { sources, defaultImage } = useMemo(() => {
    if (!srcSet) return {}

    const { default: defaultImage, ...otherImages } = srcSet

    return {
      defaultImage,
      sources: Object.keys(otherImages)
        .reverse()
        .map((size, i) => (
          <source
            key={i}
            media={`(min-width: ${size}px)`}
            srcSet={otherImages[size]}
          />
        )),
    }
  }, [srcSet])

  return (
    <picture className="picture" style={style}>
      {sources}
      <Image alt={alt} lazy={lazy} src={defaultImage} />
    </picture>
  )
}

Picture.propTypes = {
  /**
   * The image object
   */
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    srcSet: PropTypes.object.isRequired,
  }),
  /**
   * Makes the image lazy-loaded (loaded only when is in the viewport)
   */
  lazy: PropTypes.bool,
  /**
   * Extra inline styles
   */
  style: PropTypes.object,
}
