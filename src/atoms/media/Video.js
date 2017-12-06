import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ src, width, height }) => (
  <iframe
    src={src}
    width={width}
    height={height}
    frameBorder="0"
    allowFullScreen
  />
)

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
