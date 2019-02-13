import React from 'react'
import PropTypes from 'prop-types'

import Figure from './Figure'

const VideoFigureWithCaption = ({ videoSrc, caption, className }) => {
  return <Figure videoSrc={videoSrc} caption={caption} className={className} />
}

VideoFigureWithCaption.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  caption: PropTypes.string,
  className: PropTypes.string,
}

VideoFigureWithCaption.defaultProps = {
  className: '',
}

export default VideoFigureWithCaption
