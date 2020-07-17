import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Figure from '../../molecules/media/Figure'
import DateTimeFormat, { dateFormats } from '../../helpers/DateTimeFormat'
import Element, { Em, Div, Link } from '../../helpers/Element'
import useClasses from '../../helpers/useClasses'

import MediaImage from './MediaImage'
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
  imageProps,
  kicker,
  kickerAs,
  reversed,
  stackedUntilSmall,
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
        <MediaImage
          icon={icon}
          asBackgroundImage={asBackgroundImage}
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
                spaceSide="bottom"
                spaceSize="quarter"
                {...preset.kicker}
              >
                {kicker}
              </Element>
            )}
            {title && (
              <Element
                as={titleAs}
                className="c-block__title"
                spaceSize={kicker ? 'zero' : null}
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
                  <DateTimeFormat
                    datetime={date}
                    locales={dateLocales}
                    format={dateFormat}
                    style={dateStyle}
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
  asBackgroundImage: PropTypes.bool,
  mediaIcon: PropTypes.oneOf(['audio', 'gallery', 'video']),
  blockProps: PropTypes.shape(Element.propTypes),
  category: PropTypes.string,
  column: PropTypes.bool,
  contentProps: PropTypes.shape(Element.propTypes),
  cta: PropTypes.string,
  ctaIcon: Button.propTypes.icon,
  description: PropTypes.string,
  date: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.string,
  ]),
  dateFormat: PropTypes.oneOf(dateFormats),
  dateLocales: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  dateStyle: PropTypes.object,
  image: MediaImage.propTypes.image,
  imageProps: PropTypes.shape(Element.propTypes),
  kicker: PropTypes.string,
  kickerAs: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  reversed: PropTypes.bool,
  stackedUntilSmall: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  titleAs: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  titlePrefix: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  type: PropTypes.oneOf(mediaBlocksTypes),
  video: PropTypes.node,
}

MediaBlock.defaultProps = {
  asBackgroundImage: false,
  ctaIcon: 'arrow-long-right',
  dateFormat: 'date',
  dateStyle: { date: 'long' },
  titleAs: 'h3',
  kickerAs: 'h4',
}
