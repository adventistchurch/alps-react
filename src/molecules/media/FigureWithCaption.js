import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../../atoms/images/Picture'
import Figure from './Figure'

export default function FigureWithCaption({ image, ...props }) {
  return (
    <Figure {...props}>
      <div className="o-figure__image">
        <Picture {...image} />
      </div>
    </Figure>
  )
}

FigureWithCaption.propTypes = {
  ...Figure.propTypes,
  image: PropTypes.shape({ alt: PropTypes.string, srcSet: PropTypes.object }),
}
