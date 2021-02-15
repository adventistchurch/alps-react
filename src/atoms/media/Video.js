import React from 'react'
import PropTypes from 'prop-types'

const wrapStyle = {
  paddingTop: `${(100 / 16) * 9}%`, // enforces 16:9 aspect ratio. TODO: Make this calculated based on video's original aspect ratio?
}

const iframeStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
}

export default function Video({ src, ...rest }) {
  return (
    <div style={wrapStyle}>
      <iframe
        src={src}
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        style={iframeStyle}
        key={src}
        {...rest}
      />
    </div>
  )
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
}
