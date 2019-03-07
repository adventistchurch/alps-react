import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Figure from '../../molecules/media/Figure'
import DateTimeFormat, { dateFormats } from '../../helpers/DateTimeFormat'
import Element, {
  Div,
  HeadingFour,
  HeadingThree,
  Link,
} from '../../helpers/Element'

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

// Types presets
const presets = {
  column: {
    content: {
      color: 'white',
    },
    group: {
      flexJustify: 'center',
      overlay: 'dark',
    },
    title: {
      flexJustify: 'center',
      fontSize: 'xl',
      fontType: 'primary',
    },
  },

  feature: {
    type: 'inline',
    reversed: true,

    block: {
      className: 'l-grid--7-col',
      seven: true,
    },
    content: {
      borderAt: 'large',
      borderColor: 'black',
      borderSide: 'left',
      gridItem: true,
      paddingSide: ['top', 'bottom'],
      themeBackground: 'darker',
      themeBorder: 'darker',
      themeBorderSide: 'left',
      themeColor: 'lighter',
    },
    image: {
      gridItem: true,
      paddingSide: 'sides',
      paddingSize: 'zero',
    },
    title: {
      color: 'white',
      fontType: 'primary',
      strong: true, // TODO: strong => 'u-font-weight--bold'
    },
  },

  full: {
    content: {
      color: 'white',
      gridWrap: '7',
      noGridClass: true,
      seven: true,
    },
    group: {
      flexAlign: 'center',
      flexJustify: 'center',
      overlay: 'dark',
      textAlign: 'center',
    },
    title: {
      flexJustify: 'center',
      fontType: 'primary',
      fontSize: 'xl',
      gridItemSize: 5,
      gridItemSizeAtM: 2,
      noGridItemClass: true,
    },
  },

  inline: {
    image: {
      paddingSide: 'sides',
      paddingSize: 'zero',
    },
    content: {
      backgroundColor: 'gray--light',
      color: 'gray',
      padding: ['top', 'bottom'],
    },
    title: {
      themeColor: 'darker',
    },
    meta: {
      themeColor: 'dark',
    },
  },

  inset: {
    content: {
      noGridClass: true,
      seven: true,
      themeBackground: 'darker',
    },
    title: {
      gridItemSizeAtM: 4,
      linkHoverColor: 'white',
    },
    meta: {
      gridItemSizeAtM: 2,
    },
  },

  longform: {
    type: 'inline',
    block: {
      canBe: 'dark-dark',
      gridWrap: true,
      noGridClass: true,
      paddingSide: ['top', 'bottom'],
      seven: true,
      themeBackground: 'darker',
    },
    content: {
      borderSide: 'left',
      gridItemSizeAtM: 6,
      gridItemSizeAtL: 4,
      gridItemSizeAtXL: 3,
      noGridClass: true,
      shiftAt: 'large',
      shiftSide: 'left',
      themeBorder: 'light',
      themeBorderSide: 'left',
      themeColor: 'lighter',
    },
    title: {
      color: 'white',
      fontSize: 'l',
      fontType: 'primary',
    },
  },

  row: {
    content: {
      color: 'gray',
    },
    title: {
      themeColor: 'darker',
    },
    meta: {
      themeColor: 'dark',
    },
  },

  stacked: {},
}

// Border preset props
const borderProps = {
  left: {
    borderSide: 'left',
    themeBorder: 'darker',
    themeBorderSide: 'left',
  },
  leftAtLarge: {
    borderAt: 'large',
    borderColor: 'black',
    borderSide: 'left',
    themeBorder: 'darker',
    themeBorderSide: 'left',
  },
}

function getBlockClass(blocks = [], type, reversed = false) {
  const classes = []

  for (const block of blocks) {
    classes.push(block)
    classes.push(`${block}__${type}`)
    if (reversed) classes.push(`${block}--reversed`)
  }

  return classes.join(' ')
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
  // Get preset props current type
  const preset = presets[type]

  // Set border props for content, if required
  const contentProps =
    border === 'left'
      ? type === 'stacked'
        ? borderProps.left
        : type === 'inline' || reversed || presets[type].reversed
        ? borderProps.leftAtLarge
        : ''
      : {}

  const blockType = preset.type || type
  const isReversed = preset.reversed || reversed

  // Set block classes
  const blockClass = getBlockClass(
    ['c-block', 'c-media-block'],
    blockType,
    isReversed
  )

  return (
    <Div className={blockClass} {...preset.block}>
      {image && (
        <MediaImage
          {...preset.image}
          asBackgroundImage={asBackgroundImage}
          blockIconType={blockIconType}
          image={image}
          url={url}
        />
      )}
      {video && (
        <div className="c-block__image-wrap">
          <Figure videoSrc={video} />
        </div>
      )}
      <Div
        className="c-media-block__content c-block__content"
        spacing
        {...contentProps}
        {...preset.content}
      >
        <Div
          className="c-block__group c-media-block__group"
          spacing
          {...preset.group}
        >
          <Div className="u-width--100p" spacing>
            {kicker && (
              <HeadingFour
                className="c-media-block__kicker c-block__kicker"
                spaceSide="bottom"
                spaceSize="quarter"
                {...preset.kicker}
              >
                {kicker}
              </HeadingFour>
            )}
            {title && (
              <HeadingThree
                className="c-media-block__title c-block__title"
                spaceSize={kicker ? 'zero' : null}
                {...preset.title}
              >
                {url ? (
                  <Link
                    className="c-block__title-link"
                    href={url}
                    themeLinkHover="dark"
                  >
                    {title}
                  </Link>
                ) : (
                  title
                )}
              </HeadingThree>
            )}
            {description && (
              <p className="c-media-block__description c-block__description">
                {description}
              </p>
            )}
          </Div>
          {(category || date) && (
            <Div className="c-media-block__meta c-block__meta" {...preset.meta}>
              {category && <Div className="c-block__category">{category}</Div>}
              {date && (
                <Element
                  as="time"
                  className="c-block__date"
                  dateTime={date}
                  transform="upper"
                >
                  <DateTimeFormat datetime={date} format={dateFormat} />
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
