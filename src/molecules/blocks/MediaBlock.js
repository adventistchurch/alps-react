import React from 'react'
import PropTypes from 'prop-types'

import Icon, { iconNames } from '../../atoms/icons/Icon'
import datetimeFormat, { dateFormats } from '../../helpers/datetimeFormat'

import MediaImage from './MediaImage'

const typeClasses = {
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
    content:
      'l-grid-item u-color--gray u-background-color--gray--light u-padding--top u-padding--bottom',
    title: 'u-theme--color--darker',
    meta: 'u-theme--color--dark',
  },
  inset: {
    block: 'c-block__inset c-media-block__inset',
    content: 'l-grid--7-col u-theme--background-color--darker',
    title: 'l-grid-item l-grid-item--m--4-col u-link-hover--white',
    meta: 'l-grid-item l-grid-item--m--2-col',
  },
  reversed: {
    block: 'c-block--reversed c-media-block--reversed l-grid--7-col',
    image: 'l-grid-item l-grid-item--m--3-col',
    content: 'l-grid-item l-grid-item--m--4-col',
  },
  stacked: {
    block: 'c-block__stacked c-media-block__stacked',
  },
}

const borderClasses = {
  left: 'u-border--left u-theme--border-color--darker--left',
  leftAtLarge:
    'u-border-left--black--at-large u-theme--border-color--darker--left',
}

function MediaBlock({
  backgroundImage,
  blockIconType,
  border,
  category,
  cta,
  ctaIcon,
  date,
  dateFormat,
  description,
  image,
  kicker,
  title,
  type,
  video,
  url,
}) {
  // Get classes including ones for current type (if provided)
  const classes = { ...typeClasses.default, ...(type ? typeClasses[type] : {}) }

  // Get border clases
  const borderLeftClass =
    border === 'left'
      ? type === 'stacked'
        ? borderClasses.left
        : type === 'inline' || type === 'reversed'
        ? borderClasses.leftAtLarge
        : ''
      : ''

  return (
    <div className={`c-media-block c-block ${classes.block}`}>
      {(image || backgroundImage) && (
        <MediaImage
          backgroundImage={backgroundImage}
          blockIconType={blockIconType}
          className={classes.image}
          image={image}
          url={url}
          wrapClass={classes.imageWrap}
        />
      )}
      {video && (
        <div className="c-block__image-wrap ">
          <figure className="o-figure">
            <div className="fitvid">{video}</div>
          </figure>
        </div>
      )}
      <div
        className={`c-media-block__content c-block__content u-spacing ${
          classes.content
        } ${borderLeftClass}`}
      >
        <div
          className={`c-block__group c-media-block__group u-spacing ${
            classes.group
          }`}
        >
          <div className="u-width--100p u-spacing">
            {kicker && (
              <h4
                className={`c-media-block__kicker c-block__kicker u-space--quarter--bottom ${
                  classes.kicker
                }`}
              >
                {kicker}
              </h4>
            )}
            {title && (
              <h3
                className={`c-media-block__title c-block__title ${
                  classes.title
                } ${kicker ? 'u-space--zero' : ''}`}
              >
                {url ? (
                  <a
                    href={url}
                    className="c-block__title-link u-theme--link-hover--dark"
                  >
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h3>
            )}
            {description && (
              <p className="c-media-block__description c-block__description">
                {description}
              </p>
            )}
          </div>
          {(category || date) && (
            <div
              className={`c-media-block__meta c-block__meta ${classes.meta}`}
            >
              {category && (
                <span className="c-block__category u-text-transform--upper">
                  {category}
                </span>
              )}
              {date && (
                <time
                  className="c-block__date u-text-transform--upper"
                  dateTime={date}
                >
                  {datetimeFormat({ date, dateFormat })}
                </time>
              )}
            </div>
          )}
          {cta && url && (
            <a
              className="c-block__button o-button o-button--outline"
              href={url}
            >
              <span className="u-icon u-icon--m u-path-fill--base u-space--half--left">
                <Icon name={ctaIcon} />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

MediaBlock.propTypes = {
  backgroundImage: PropTypes.object,
  blockIconType: PropTypes.oneOf(['audio', 'gallery', 'video']),
  border: PropTypes.oneOf(['left', 'none']),
  category: PropTypes.string,
  cta: PropTypes.string,
  ctaIcon: PropTypes.oneOf(iconNames),
  description: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dateFormat: PropTypes.oneOf(dateFormats),
  image: MediaImage.propTypes.image,
  kicker: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.oneOf(['inline', 'inset', 'reversed', 'stacked']),
  title: PropTypes.string,
  video: PropTypes.node,
}

MediaBlock.defaultProps = {
  border: 'none',
  ctaIcon: 'arrow-long-right',
  dateFormat: 'date',
}

export default MediaBlock
