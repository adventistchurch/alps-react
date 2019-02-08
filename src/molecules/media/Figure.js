import React from 'react'
import PropTypes from 'prop-types'

import Figcaption from './Figcaption'
import Picture from '../../atoms/images/Picture'
import Video from '../../atoms/media/Video'

const Figure = ({ imageSrcSet, imageAlt, videoSrc, caption, className }) => {
  return (
    <figure className={`o-figure ${className}`}>
      {imageSrcSet && (
        <div className="o-figure__image">
          <Picture image={imageSrcSet} alt={imageAlt} />
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
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string,
  videoSrc: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string,
}

Figure.defaultProps = {
  className: '',
}

export default Figure
