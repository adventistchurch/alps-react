import React from 'react'
import PropTypes from 'prop-types'

function Video({ src, width, height }) {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  )
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
}
Video.defaultProps = {
  width: 600,
  height: 338,
}

export default Video
