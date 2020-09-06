import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Figure from '../../molecules/media/Figure'
import DateTime, { dateModes, dateFormats } from '../../helpers/DateTime'
import Element, { Em, Div, Link } from '../../helpers/Element'
import useClasses from '../../helpers/useClasses'

import BlockImage from './BlockImage'
import presets from './MediaBlock.presets'

export const mediaBlocksTypes = Object.keys(presets)

/**
 * The MediaBlock Component
 */
export default function MediaBlock({
  asBackgroundImage,
  mediaIcon,
  blockProps,
  category,
  contentProps,
  cta,
  ctaIcon,
  date,
  dateFormat,
  dateLocales,
  dateStyle,
  description,
  image,
  imageCaption,
  imageProps,
  kicker,
  kickerAs,
  reversed,
  stackedUntilSmall,
  timeStyle,
  title,
  titleAs,
  titlePrefix,
  type,
  video,
  url,
}) {
  // Get preset props current type
  const preset = presets[type] || presets['default']

  const isReversed = reversed !== undefined ? reversed : preset.reversed

  const blockType = preset.type || type
  const _titleAs = preset.titleAs || titleAs
  const icon = mediaIcon || preset.icon

  const wrapClasses = useClasses(`c-media-block c-block`, {
    [`c-block__${blockType}`]: blockType,
    'c-block__stacked--until-small':
      blockType && (stackedUntilSmall || preset.stackedUntilSmall),
    'c-media-block--reversed': blockType && isReversed, // TODO: Ask how reverse clases work in ALPS?
    'c-block--reversed': blockType && isReversed,
  })

  return (
    <Div className={wrapClasses} {...preset.block} {...blockProps}>
      {image && (
        <BlockImage
          icon={icon}
          asBackgroundImage={asBackgroundImage}
          caption={imageCaption}
          {...preset.image}
          {...imageProps}
          image={image}
          url={url}
        />
      )}
      {video && (
        <div className="c-block__image-wrap" {...imageProps}>
          <Figure videoSrc={video} />
        </div>
      )}
      <Div
        className="c-block__content"
        spacing
        {...preset.content}
        {...(isReversed ? preset.contentReversed : {})}
        {...contentProps}
      >
        <Div className="c-block__group" spacing {...preset.group}>
          <Div className="u-width--100p" spacing>
            {kicker && (
              <Element
                as={kickerAs}
                className="c-block__kicker"
                spaceBottom="quarter"
                {...preset.kicker}
              >
                {kicker}
              </Element>
            )}
            {title && (
              <Element
                as={_titleAs}
                className="c-block__title"
                space={kicker ? 'zero' : null}
                themeColor="dark"
                fontType="primary"
                {...preset.title}
              >
                <Link
                  className="c-block__title-link"
                  href={url}
                  themeLinkHover="dark"
                  {...preset.titleLink}
                >
                  {titlePrefix && <Em themeColor="lighter">{titlePrefix}: </Em>}
                  {title}
                </Link>
              </Element>
            )}
            {description && (
              <p className="c-block__description">{description}</p>
            )}
          </Div>
          {(category || date) && (
            <Div className="c-block__meta" {...preset.meta}>
              {category && (
                <Div className="c-block__category" transform="upper">
                  {category}
                </Div>
              )}
              {date && (
                <Element
                  as="time"
                  className="c-block__date"
                  dateTime={date}
                  transform="upper"
                >
                  <DateTime
                    datetime={date}
                    locales={dateLocales}
                    format={dateFormat}
                    dateStyle={dateStyle}
                    timeStyle={timeStyle}
                  />
                </Element>
              )}
            </Div>
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
        </Div>
      </Div>
    </Div>
  )
}

MediaBlock.propTypes = {
  /**
   * Extra props for block wrapper.
   */
  blockProps: PropTypes.shape(Element.propTypes),
  /**
   * Category text.
   */
  category: PropTypes.string,
  /**
   * Extra props for content wrapper.
   */
  contentProps: PropTypes.shape(Element.propTypes),
  /**
   * Call-to-Action label.
   */
  cta: PropTypes.string,
  /**
   * Call-to-Action icon.
   */
  ctaIcon: Button.propTypes.icon,
  /**
   * Description text.
   */
  description: PropTypes.string,
  /**
   * Block's date.
   */
  date: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.string,
  ]),
  /**
   * Defines the mode of date as one of these: `datetime`, `date` or `time`
   */
  dateMode: PropTypes.oneOf(dateModes),
  /**
   * Use it for date localization (if not set, will use browser's default locale)
   */
  dateLocales: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**
   * Sets format for the date part (day, month, year) of a Date
   */
  dateFormat: PropTypes.oneOf(dateFormats),
  /**
   * Sets format for the time part (hours, minutes, and seconds) of a Date
   */
  timeFormat: PropTypes.oneOf(dateFormats),
  /**
   * Image object (including `srcSet` and `alt`).
   */
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    srcSet: PropTypes.object.isRequired,
  }),
  /**
   * Image caption (as string or node element).
   */
  imageCaption: PropTypes.node,
  /**
   * When true image as a background image (use it when a responsive layout is required).
   */
  asBackgroundImage: PropTypes.bool,
  /**
   * Displays an icon in the media section.
   */
  mediaIcon: PropTypes.oneOf(['audio', 'gallery', 'video']),
  /**
   * Extra props for image wrapper.
   */
  imageProps: PropTypes.shape(Element.propTypes),
  /**
   * Kicker text.
   */
  kicker: PropTypes.string,
  /**
   * Kicker render element.
   */
  kickerAs: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  /**
   * URL used for `title` and `cta` link.
   */
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Flips order of media and conetnt .
   */
  reversed: PropTypes.bool,
  /**
   * Forces block to be stacked (media section on top of content)
   */
  stackedUntilSmall: PropTypes.bool,
  /**
   * Title text.
   */
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  /**
   * Title render element.
   */
  titleAs: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  /**
   * Title prefix.
   */
  titlePrefix: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * Set media block's type from presets.
   */
  type: PropTypes.oneOf(mediaBlocksTypes),
  /**
   * Set media video.
   */
  video: PropTypes.node,
}

MediaBlock.defaultProps = {
  type: 'default',
  asBackgroundImage: false,
  ctaIcon: 'arrow-long-right',
  dateMode: 'date',
  dateFormat: 'long',
  timeFormat: 'short',
  titleAs: 'h3',
  kickerAs: 'h4',
}
