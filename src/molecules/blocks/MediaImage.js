import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../../atoms/images/Picture'
import { Div, Link } from '../../helpers/Element'
import useUUID from '../../helpers/useUUID'
import InlineStyles from '../../helpers/InlineStyles'
import useResponsiveStyles from '../../helpers/useResponsiveStyles'

function MediaImage({
  asBackgroundImage,
  blockIconType,
  className,
  image,
  url,
  wrapProps,
  ...otherProps
}) {
  const uuid = useUUID('c-media-block__image-')
  const bgImageStyles = useResponsiveStyles(
    url => `.${uuid}.o-background-image {
      background-image: url('${url}');
    }`,
    image.srcSet
  )

  const classNames = ['c-media-block__image', 'c-block__image', uuid]

  if (blockIconType)
    classNames.push(`c-block__icon c-block__icon--${blockIconType}`)

  if (asBackgroundImage)
    classNames.push('o-background-image u-background--cover')

  if (className) classNames.push(className)

  return (
    <Div {...otherProps} className={classNames.join(' ')}>
      {asBackgroundImage && bgImageStyles && (
        <InlineStyles styles={bgImageStyles} />
      )}
      <Div className="c-block__image-wrap" {...wrapProps}>
        <Link href={url} title={image.caption || image.alt}>
          <Picture
            image={image}
            // TODO: FIX: find a better way to hide picture when asBackgroundImage is enabled
            style={asBackgroundImage ? { visibility: 'hidden' } : null}
          />
        </Link>
      </Div>
    </Div>
  )
}

MediaImage.propTypes = {
  ...Div.propTypes,
  asBackgroundImage: PropTypes.bool,
  blockIconType: PropTypes.string,
  className: PropTypes.string,
  image: Picture.propTypes.image,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  wrapProps: PropTypes.object,
}

export default MediaImage
