import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../../atoms/images/Picture'
import { Div, Link } from '../../helpers/Element'
import useClasses from '../../helpers/useClasses'
import InlineStyles from '../../helpers/InlineStyles'
import useResponsiveStyles from '../../helpers/useResponsiveStyles'

/**
 * Block Image component
 */
export default function BlockImage({
  asBackgroundImage,
  caption,
  className,
  icon,
  image,
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
              paddingRight={icon || false}
              paddingLeft={icon ? 'quad' : false}
              paddingSides={!icon}
            >
              {caption || image.caption}
            </Div>
          )}
        </div>
      </div>
    </Div>
  )
}

BlockImage.propTypes = {
  /**
   * Extra classes
   */
  className: PropTypes.string,
  /**
   * Image object (including `srcSet` and `alt`).
   */
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    srcSet: PropTypes.object.isRequired,
  }).isRequired,
  /**
   * Image caption (as string or node element).
   */
  caption: PropTypes.node,
  /**
   * When true image as a background image (use it when a responsive layout is required).
   */
  asBackgroundImage: PropTypes.bool,
  /**
   * Displays an icon in the media section.
   */
  icon: PropTypes.oneOf(['audio', 'gallery', 'video']),
  /**
   * URL for the link that wraps the image.
   */
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
