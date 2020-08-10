import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../../atoms/images/Picture'
import { Div, Link } from '../../helpers/Element'
import useClasses from '../../helpers/useClasses'
import InlineStyles from '../../helpers/InlineStyles'
import useResponsiveStyles from '../../helpers/useResponsiveStyles'

function MediaImage({
  asBackgroundImage,
  caption,
  className,
  icon,
  image,
  type,
  url,
  ...otherProps
}) {
  const bgImageStyles = useResponsiveStyles(
    url => `.o-background-image {
      background-image: url('${url}');
    }`,
    image.srcSet
  )

  const classNames = useClasses(
    'c-block__image',
    {
      [`c-block__icon c-block__icon--${icon}`]: icon,
      ['o-background-image u-background--cover']: asBackgroundImage,
    },
    className
  )

  return (
    <Div {...otherProps} className={classNames}>
      {asBackgroundImage && bgImageStyles && (
        <InlineStyles styles={bgImageStyles} />
      )}
      <div className="c-block__image-outer-wrap">
        <div className="c-block__image-wrap">
          <Link href={url} title={image.caption || image.alt}>
            <Picture
              image={image}
              // TODO: FIX: find a better way to hide picture when asBackgroundImage is enabled
              style={asBackgroundImage ? { visibility: 'hidden' } : null}
            />
          </Link>

          {(caption || image.caption) && (
            <Div
              className="c-block__caption"
              color="white-transparent"
              paddingBottom
              paddingTop
              paddingRight={type}
              paddingLeft={type ? 'quad' : false}
              paddingSides={!type}
            >
              {caption || image.caption}
            </Div>
          )}
        </div>
      </div>
    </Div>
  )
}

MediaImage.propTypes = {
  asBackgroundImage: PropTypes.bool,
  className: PropTypes.string,
  caption: PropTypes.string,
  icon: PropTypes.string,
  image: Picture.propTypes.image,
  type: PropTypes.oneOf(['audio', 'gallery', 'video']),
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default MediaImage
