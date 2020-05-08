import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../../atoms/images/Picture'
import { Div, Link } from '../../helpers/Element'
import useClasses from '../../helpers/useClasses'
import InlineStyles from '../../helpers/InlineStyles'
import useResponsiveStyles from '../../helpers/useResponsiveStyles'

function MediaImage({
  asBackgroundImage,
  icon,
  className,
  image,
  url,
  wrapProps,
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
  icon: PropTypes.string,
  className: PropTypes.string,
  image: Picture.propTypes.image,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  wrapProps: PropTypes.object,
}

export default MediaImage
