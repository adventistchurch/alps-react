import React from 'react'
import PropTypes from 'prop-types'
import { useImageComponent } from '../../context/ImageContext'

export default function Picture({ alt, srcSet, ...props }) {
  const Img = useImageComponent()

  if (Img) return <Img alt={alt} srcSet={srcSet} {...props} asPicture />

  if (!srcSet) return null
  const { default: defaultImage, ...otherImages } = srcSet

  return (
    <picture {...props}>
      {Object.keys(otherImages)
        .reverse()
        .map((size, i) => (
          <source
            key={i}
            media={`(min-width: ${size}px)`}
            srcSet={otherImages[size]}
          />
        ))}
      <img alt={alt} src={defaultImage} />
    </picture>
  )
}
Picture.propTypes = {
  alt: PropTypes.string.isRequired,
  srcSet: PropTypes.object.isRequired,
}
