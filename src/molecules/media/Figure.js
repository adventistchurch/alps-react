import React from 'react'
import PropTypes from 'prop-types'

import Figcaption from './Figcaption'
import Picture from '../../atoms/images/Picture'
import Video from '../../atoms/media/Video'

function Figure({ caption, className, image, videoSrc }) {
  return (
    <figure className={`o-figure ${className}`}>
      {image && (
        <div className="o-figure__image">
          <Picture image={image} />
        </div>
      )}
      {videoSrc && (
        <div className="u-image--wrap fitvid">
          <Video src={videoSrc} />
        </div>
      )}
      {caption && (
        <div className="o-figure__caption">
          <Figcaption>{caption}</Figcaption>
        </div>
      )}
    </figure>
  )
}

Figure.propTypes = {
  caption: PropTypes.string,
  className: PropTypes.string,
  image: Picture.propTypes.image,
  videoSrc: PropTypes.string,
}
Figure.defaultProps = {
  className: '',
}

export default Figure
