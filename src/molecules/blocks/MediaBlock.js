import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Figure from '../../molecules/media/Figure'
import DateTimeFormat, { dateFormats } from '../../helpers/DateTimeFormat'

import MediaImage from './MediaImage'

export const mediaBlocksTypes = [
  'column',
  'feature',
  'full',
  'inline',
  'inset',
  'longform',
  'row',
  'stacked',
]

const defaultClasses = {
  image: '',
  imageWrap: '',
  content: '',
  group: '',
  kicker: '',
  title: '',
  meta: '',
}

const presetClasses = {
  column: {
    content: 'u-color--white',
    group: 'u-flex--justify-center u-overlay--dark',
    title: 'u-font--primary--xl u-flex--justify-center',
  },
  feature: {
    block:
      'c-block__inline c-media-block__inine c-block--reversed c-media-block--reversed l-grid--7-col',
    content:
      'l-grid-item u-border-left--black--at-large u-theme--border-color--darker--left u-theme--color--lighter u-theme--background-color--darker u-padding--top u-padding--bottom',
    image: 'l-grid-item u-padding--zero--sides',
    title: 'u-color--white u-font--primary u-font-weight--bold',
  },
  full: {
    content: 'l-grid--7-col l-grid-wrap l-grid-wrap--7-of-7 u-color--white',
    group:
      'u-flex--justify-center u-flex--align-center u-text-align--center u-overlay--dark',
    title:
      'l-grid-item--5-col l-grid-item--m--2-col u-font--primary--xl u-flex--justify-center',
  },
  inline: {
    image: 'u-padding--zero--sides',
    content:
      'u-color--gray u-background-color--gray--light u-padding--top u-padding--bottom',
    title: 'u-theme--color--darker',
    meta: 'u-theme--color--dark',
  },
  inset: {
    content: 'l-grid--7-col u-theme--background-color--darker',
    title: 'l-grid-item l-grid-item--m--4-col u-link-hover--white',
    meta: 'l-grid-item l-grid-item--m--2-col',
  },
  longform: {
    block:
      ' l-grid--7-col l-grid-wrap u-theme--background-color--darker can-be--dark-dark u-padding--top u-padding--bottom',
    type: 'inline',
    content:
      'u-shift--left--1-col--at-large l-grid-item l-grid-item--m--6-col l-grid-item--l--4-col l-grid-item--xl--3-col u-border--left u-theme--border-color--light--left u-theme--color--lighter',
    title: 'u-color--white u-font--primary--l',
  },
  row: {
    content: 'u-color--gray',
    title: 'u-theme--color--darker',
    meta: 'u-theme--color--dark',
  },
  stacked: {},
}

const borderClasses = {
  left: 'u-border--left u-theme--border-color--darker--left',
  leftAtLarge:
    'u-border-left--black--at-large u-theme--border-color--darker--left',
}

function MediaBlock({
  asBackgroundImage,
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
  reversed,
  title,
  type,
  video,
  url,
}) {
  // Get classes including ones for current type (if provided)
  const classes = {
    ...defaultClasses,
    ...(type ? presetClasses[type] : {}),
  }

  // Set block classes
  const blockType = classes.type || type
  const blockClass = `c-media-block c-block c-media-block__${blockType} c-block__${blockType} ${
    reversed ? ' c-block--reversed c-media-block--reversed`' : ''
  } ${classes.block}`

  // Set border clases
  const borderClass =
    border === 'left'
      ? type === 'stacked'
        ? borderClasses.left
        : type === 'inline' || type === 'reversed'
        ? borderClasses.leftAtLarge
        : ''
      : ''

  return (
    <div className={blockClass}>
      {image && (
        <MediaImage
          asBackgroundImage={asBackgroundImage}
          blockIconType={blockIconType}
          className={classes.image}
          image={image}
          url={url}
          wrapClass={classes.imageWrap}
        />
      )}
      {video && (
        <div className="c-block__image-wrap">
          <Figure videoSrc={video} />
        </div>
      )}
      <div
        className={`c-media-block__content c-block__content u-spacing ${
          classes.content
        } ${borderClass}`}
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
                  <DateTimeFormat datetime={date} format={dateFormat} />
                </time>
              )}
            </div>
          )}
          {cta && url && (
            <Button
              as="a"
              className="c-block__button"
              icon={ctaIcon}
              iconSize="m"
              outline
              text={cta}
              url={url}
            />
          )}
        </div>
      </div>
    </div>
  )
}

MediaBlock.propTypes = {
  asBackgroundImage: PropTypes.bool,
  blockIconType: PropTypes.oneOf(['audio', 'gallery', 'video']),
  border: PropTypes.oneOf(['left', 'none']),
  category: PropTypes.string,
  column: PropTypes.bool,
  cta: PropTypes.string,
  ctaIcon: Button.propTypes.icon,
  description: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dateFormat: PropTypes.oneOf(dateFormats),
  image: MediaImage.propTypes.image,
  kicker: PropTypes.string,
  url: PropTypes.string,
  reversed: PropTypes.bool,
  type: PropTypes.oneOf(mediaBlocksTypes),
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  video: PropTypes.node,
}

MediaBlock.defaultProps = {
  asBackgroundImage: false,
  border: 'none',
  ctaIcon: 'arrow-long-right',
  dateFormat: 'date',
  type: 'row',
}

export default MediaBlock
