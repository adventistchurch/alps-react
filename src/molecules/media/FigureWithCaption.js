import React from 'react'
import PropTypes from 'prop-types'

import Figure from './Figure'

function FigureWithCaption({ imageSrcSet, imageAlt, caption, className }) {
  return (
    <Figure
      imageSrcSet={imageSrcSet}
      imageAlt={imageAlt}
      caption={caption}
      className={className}
    />
  )
}

FigureWithCaption.propTypes = {
  imageSrcSet: PropTypes.object.isRequired,
  imageAlt: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string,
}
FigureWithCaption.defaultProps = {
  className: '',
}

export default FigureWithCaption
