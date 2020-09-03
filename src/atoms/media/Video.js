import React from 'react'
import PropTypes from 'prop-types'

function useAspectRatioStyle(aspectRatio, width, height) {
  switch (aspectRatio) {
    case 'original': {
      return {
        position: 'relative',
        width,
        height,
      }
    }

    default: {
      const [wr, hr] = aspectRatio.split(':')
      return {
        position: 'relative',
        paddingTop: `${(100 / wr) * hr}%`,
      }
    }
  }
}

const iframeStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}

export default function Video({
  src,
  title,
  aspectRatio,
  width,
  height,
  ...rest
}) {
  const wrapStyle = useAspectRatioStyle(aspectRatio, width, height)
  return (
    <div style={wrapStyle}>
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        style={iframeStyle}
        width={width}
        height={height}
        {...rest}
      />
    </div>
  )
}

Video.propTypes = {
  /**
   * Video source url (i.e. Vimeo or Youtube embeds urls)
   */
  src: PropTypes.string.isRequired,
  /**
   * Video descriptive title (required for a11y)
   */
  title: PropTypes.string.isRequired,
  /**
   * Video aspect ratio. NOTE: Vimeo player internally sets video's original aspect ratio so this may not work.
   */
  aspectRatio: PropTypes.oneOf(['1:1', '4:3', '16:9', '21:9', 'original']),
  /**
   * Use only with `aspectRatio`: `original`
   */
  width: PropTypes.number,
  /**
   * Use only with `aspectRatio`: `original`
   */
  height: PropTypes.number,
}
Video.defaultProps = {
  aspectRatio: '16:9',
}
