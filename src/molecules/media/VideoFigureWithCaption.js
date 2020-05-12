import React from 'react'

import Figure from './Figure'

function VideoFigureWithCaption(props) {
  return <Figure {...props} />
}

VideoFigureWithCaption.propTypes = Figure.propTypes

export default VideoFigureWithCaption
