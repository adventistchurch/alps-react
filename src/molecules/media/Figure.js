import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Figcaption from './Figcaption'
import Picture from '../../atoms/images/Picture'
import Video from '../../atoms/media/Video'
import {
  getFigureClasses,
  figureAlignPositions,
  figureSizes,
} from '../../atoms/global/figures'

export default function Figure({
  caption,
  className,
  image,
  videoSrc,
  align,
  size,
}) {
  const classes = useMemo(() => getFigureClasses(align, size), [align, size])

  return (
    <figure className={`o-figure ${classes} ${className}`}>
      {image && (
        <div className="o-figure__image">
          <Picture {...image} />
        </div>
      )}
      {videoSrc && (
        <div className="u-image--wrap">
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
  align: PropTypes.oneOf(figureAlignPositions),
  className: PropTypes.string,
  image: PropTypes.shape({ alt: PropTypes.string, srcSet: PropTypes.object }),
  size: PropTypes.oneOf(figureSizes),
  videoSrc: PropTypes.string,
}
Figure.defaultProps = {
  className: '',
}
