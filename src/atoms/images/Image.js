import React from 'react'
import PropTypes from 'prop-types'

import { useImageComponent } from '../../context/ImageContext'

export default function Image(props) {
  const Img = useImageComponent()

  if (Img) return <Img {...props} />

  return <img {...props} />
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
}
