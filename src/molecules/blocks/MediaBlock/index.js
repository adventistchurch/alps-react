import React from 'react'
import PropTypes from 'prop-types'

import { iconNames } from '../../../atoms/icons/Icon'
import Kicker from './Kicker'
import MediaTitle from './MediaTitle'
import MediaDescription from './MediaDescription'
import MediaDate from './MediaDate'
import Category from './Category'
import MediaImage from './MediaImage'
import MediaVideo from './MediaVideo'
import MediaCallToAction from './MediaCallToAction'

const mediaBlockClasses = {
  default: {
    block: 'c-media-block__row c-block__row',
    image: '',
    imageWrap: '',
    content: 'u-color--gray',
    group: '',
    kicker: '',
    title: 'u-theme--color--darker',
    meta: 'u-theme--color--dark',
  },
  inline: {
    block:
      'c-block__inline c-media-block__inine c-block--reversed c-media-block--reversed l-grid--7-col',
    image: 'l-grid-item u-padding--zero--sides',
    imageWrap: '',
    content:
      'l-grid-item u-color--gray u-background-color--gray--light u-padding--top u-padding--bottom',
    group: '',
    kicker: '',
    title: 'u-theme--color--darker',
    meta: 'u-theme--color--dark',
  },
  inset: {
    block: 'c-block__inset c-media-block__inset',
    image: '',
    imageWrap: '',
    content: 'l-grid--7-col u-theme--background-color--darker',
    group: '',
    kicker: '',
    title: 'l-grid-item l-grid-item--m--4-col u-link-hover--white',
    meta: 'l-grid-item l-grid-item--m--2-col',
  },
  reversed: {
    block: 'c-block--reversed c-media-block--reversed l-grid--7-col',
    image: 'l-grid-item l-grid-item--m--3-col',
    imageWrap: '',
    content: 'l-grid-item l-grid-item--m--4-col',
    group: '',
    kicker: '',
    title: '',
    meta: '',
  },
  stacked: {
    block: 'c-block__stacked c-media-block__stacked',
    image: '',
    imageWrap: '',
    content: '',
    group: '',
    kicker: '',
    title: '',
    meta: '',
  },
}

const borderClasses = {
  left: 'u-border--left u-theme--border-color--darker--left',
  leftAtLarge:
    'u-border-left--black--at-large u-theme--border-color--darker--left',
}

function MediaBlock({
  kicker,
  title,
  description,
  category,
  datetime,
  dateFormat,
  imageSrcSet,
  imageAlt,
  video,
  url,
  cta,
  ctaIcon,
  inline,
  inset,
  reversed,
  stacked,
  border,
}) {
  const classes = inline
    ? mediaBlockClasses.inline
    : inset
    ? mediaBlockClasses.inset
    : reversed
    ? mediaBlockClasses.reversed
    : stacked
    ? mediaBlockClasses.stacked
    : mediaBlockClasses.default

  const borderLeftClass =
    border == 'left'
      ? stacked
        ? borderClasses.left
        : inline || reversed
        ? borderClasses.leftAtLarge
        : ''
      : ''

  return (
    <div className={`c-media-block c-block ${classes.block}`}>
      {imageSrcSet && (
        <MediaImage
          srcSet={imageSrcSet}
          alt={imageAlt}
          url={url}
          imageClass={`${classes.image}`}
          wrapClass={`${classes.imageWrap}`}
        />
      )}
      {video && <MediaVideo video={video} />}
      <div
        className={`c-media-block__content c-block__content u-spacing ${
          classes.content
        } ${borderLeftClass}`}
      >
        <div
          className={`u-spacing c-block__group c-media-block__group ${
            classes.group
          }`}
        >
          <div className="u-width--100p u-spacing">
            {kicker && <Kicker text={kicker} className={classes.kicker} />}
            {title && (
              <MediaTitle
                title={title}
                url={url}
                className={`${classes.title} ${kicker ? 'u-space--zero' : ''}`}
              />
            )}
            {description && <MediaDescription description={description} />}
          </div>
          {(category || datetime) && (
            <div
              className={`c-media-block__meta c-block__meta ${classes.meta}`}
            >
              {category && <Category category={category} />}
              {datetime && (
                <MediaDate datetime={datetime} dateFormat={dateFormat} />
              )}
            </div>
          )}
          {cta && url && (
            <MediaCallToAction label={cta} url={url} icon={ctaIcon} />
          )}
        </div>
      </div>
    </div>
  )
}

MediaBlock.propTypes = {
  kicker: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  datetime: PropTypes.number,
  dateFormat: PropTypes.oneOf(['date', 'time', 'datetime']),
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string,
  video: PropTypes.node,
  url: PropTypes.string,
  cta: PropTypes.string,
  ctaIcon: PropTypes.oneOf(iconNames),
  inline: PropTypes.bool,
  inset: PropTypes.bool,
  reversed: PropTypes.bool,
  stacked: PropTypes.bool,
  border: PropTypes.oneOf(['left', 'none']),
}

MediaBlock.defaultProps = {
  dateFormat: 'date',
  ctaIcon: 'arrow-long-right',
  border: 'none',
}

export default MediaBlock
