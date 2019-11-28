import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../../atoms/images/Picture'
import { Div, Link } from '../../helpers/Element'
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

  const classNames = ['c-media-block__image', 'c-block__image']
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
          <Picture image={image} />
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
  url: PropTypes.string,
  wrapProps: PropTypes.object,
}

export default MediaImage
