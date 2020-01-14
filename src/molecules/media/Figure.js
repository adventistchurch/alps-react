import React from 'react'
import PropTypes from 'prop-types'

import Figcaption from './Figcaption'
import Picture from '../../atoms/images/Picture'
import Video from '../../atoms/media/Video'

function Figure({ caption, className, image, lazy, videoSrc }) {
  const classNames = ['o-figure']
  if (className) classNames.push(className)

  return (
    <figure className={classNames.join(' ')}>
      {image && (
        <div className="o-figure__image">
          <Picture image={image} lazy={lazy} />
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
  lazy: PropTypes.bool,
  videoSrc: PropTypes.string,
}

export default Figure
