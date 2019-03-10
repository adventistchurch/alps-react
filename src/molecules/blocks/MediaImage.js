import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../../atoms/images/Picture'
import { Div } from '../../helpers/Element'
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
  wrapProps,
  ...otherProps
}) {
  const bgImageStyles = useResponsiveStyles(
    getBackgroundImageRule,
    image.srcSet
  )

  return (
    <Div
      {...otherProps}
      className={`c-media-block__image c-block__image ${className} ${
        blockIconType ? `c-block__icon c-block__icon--${blockIconType}` : ''
      } ${asBackgroundImage ? ' o-background-image u-background--cover' : ''}`}
    >
      {asBackgroundImage && bgImageStyles && (
        <InlineStyles styles={bgImageStyles} />
      )}
      <Div className="c-block__image-wrap" {...wrapProps}>
        <a href={url} title={image.caption || image.alt}>
          <Picture image={image} />
        </a>
      </Div>
    </Div>
  )
}

MediaImage.propTypes = {
  ...Element.propTypes,
  asBackgroundImage: PropTypes.bool,
  blockIconType: PropTypes.string,
  className: PropTypes.string,
  image: Picture.propTypes.image,
  url: PropTypes.string,
  wrapProps: PropTypes.object,
}
MediaImage.defaultProps = {
  className: '',
}

export default MediaImage
