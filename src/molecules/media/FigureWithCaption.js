import React from 'react'
import PropTypes from 'prop-types'

import Figure from './Figure'

function FigureWithCaption({ image, caption, className }) {
  return <Figure caption={caption} className={className} image={image} />
}

FigureWithCaption.propTypes = {
  image: PropTypes.objectOf(Figure.propTypes.image).isRequired,
  caption: PropTypes.string,
  className: PropTypes.string,
}
FigureWithCaption.defaultProps = {
  className: '',
}

export default FigureWithCaption
