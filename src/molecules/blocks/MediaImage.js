import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../../atoms/images/Picture'
import InlineStyles from '../../helpers/InlineStyles'
import useResponsiveStyles from '../../helpers/useResponsiveStyles'

const getBackgroundImageRule = url => `.o-background-image {
  background-image: url('${url}');
}`

function MediaImage({
  asBackgroundImage,
  blockIconType,
  className,
  image,
  url,
  wrapClass,
}) {
  const { alt, caption, srcSet } = image
  const backgroundImageStyles = asBackgroundImage
    ? useResponsiveStyles(getBackgroundImageRule, srcSet)
    : null

  return (
    <div
      className={`c-media-block__image c-block__image ${className} ${
        blockIconType ? `c-block__icon c-block__icon--${blockIconType}` : ''
      } ${asBackgroundImage ? ' o-background-image u-background--cover' : ''}`}
    >
      {backgroundImageStyles && <InlineStyles styles={backgroundImageStyles} />}
      <div className={`c-block__image-wrap ${wrapClass}`}>
        <a href={url} title={caption || alt}>
          <Picture className="picture" image={srcSet} alt={alt} />
        </a>
      </div>
    </div>
  )
}

MediaImage.propTypes = {
  asBackgroundImage: PropTypes.bool,
  blockIconType: PropTypes.string,
  className: PropTypes.string,
  image: Picture.propTypes.image.isRequired,
  url: PropTypes.string,
  wrapClass: PropTypes.string,
}
MediaImage.defaultProps = {
  className: '',
  wrapClass: '',
}

export default MediaImage
