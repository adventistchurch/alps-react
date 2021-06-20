import React from 'react'
import PropTypes from 'prop-types'

import Video from '../../atoms/media/Video'
import Figure from './Figure'

export default function VideoFigureWithCaption({ videoSrc, ...props }) {
  return (
    <Figure {...props}>
      <div className="u-image--wrap">
        <Video src={videoSrc} />
      </div>
    </Figure>
  )
}

VideoFigureWithCaption.propTypes = {
  ...Figure.propTypes,
  videoSrc: PropTypes.string,
}
