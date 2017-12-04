import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../atoms/images/Image'
import Figcaption from './Figcaption'
import Figure from './Figure'

const FigureWithCaption = ({ image, caption, className }) => {
  return (
    <Figure className={className}>
      <div className="img-wrap">
        <Image {...image} />
      </div>
      <Figcaption caption={caption} />
    </Figure>
  )
}

FigureWithCaption.propTypes = {
  image: PropTypes.object.isRequired,
  caption: PropTypes.string,
  className: PropTypes.string,
}

export default FigureWithCaption
