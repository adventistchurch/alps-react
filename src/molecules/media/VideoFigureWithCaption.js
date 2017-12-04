import React from 'react'
import PropTypes from 'prop-types'

import Figcaption from './Figcaption'
import Figure from './Figure'

const VideoFigureWithCaption = ({ videoEmbed, caption, className }) => {
  return (
    <Figure className={className}>
      <div className="img-wrap fitvid">{videoEmbed}</div>
      <Figcaption caption={caption} />
    </Figure>
  )
}

VideoFigureWithCaption.propTypes = {
  videoEmbed: PropTypes.node,
  caption: PropTypes.string,
  className: PropTypes.string,
}

export default VideoFigureWithCaption
