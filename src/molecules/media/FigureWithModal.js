import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../atoms/images/Image'
import Figcaption from './Figcaption'
import Figure from './Figure'

const FigureWithModal = ({ image, caption, className }) => {
  return (
    <Figure className={`figure ${className}`}>
      <div className="img-wrap">
        <Image {...image} />
      </div>
      <div className="spacing--quarter">
        <Figcaption caption={caption} />
      </div>
    </Figure>
  )
}

FigureWithModal.propTypes = {
  image: PropTypes.object.isRequired,
  caption: PropTypes.string,
  className: PropTypes.string,
}

export default FigureWithModal
