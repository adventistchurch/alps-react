import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Figure from '../../molecules/media/Figure'
import DateTimeFormat, { dateFormats } from '../../helpers/DateTimeFormat'
import Element, {
  Em,
  Div,
  HeadingFour,
  HeadingThree,
  Link,
} from '../../helpers/Element'

import MediaImage from './MediaImage'

export const mediaBlocksTypes = [
  'column',
  'feature',
  'featuredNews',
  'full',
  'inline',
  'inset',
  'longform',
  'mediaContent',
  'mediaRow',
  'row',
  'stacked',
]

const blockClass = 'c-block'
const mediaBlockClass = 'c-media-block'

// Types presets
const presets = {
  default: {
    title: {
      fontSize: 'l',
    },
  },

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
      seven: true,
    },
    content: {
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
      fontWeight: 'bold',
    },
    titleLink: {
      themeLinkHover: 'light',
    },
  },

  featuredNews: {
    stackedUntilSmall: true,
    seven: true,
    block: {
      gridBreak: 'large',
      gridWrap: true,
      seven: true,
      spacingUntil: 'small',
    },
    image: {
      gridItemSizeAtS: 2,
      gridItemSizeAtL: 1,
      paddingSize: 'zero',
      paddingSide: 'sides',
    },
    content: {
      gridItemSizeAtS: 4,
      gridItemSizeAtL: 3,
      paddingSide: 'left',
      flexJustify: 'start',
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
    reversed: true,
    image: {
      paddingSide: 'sides',
      paddingSize: 'zero',
    },
    content: {
      backgroundColor: 'gray--light',
      color: 'gray',
      padding: ['top', 'bottom'],
    },
    contentReversed: {
      borderAt: 'large',
      borderColor: 'black',
      borderSide: 'left',
      themeBorder: 'darker',
      themeBorderSide: 'left',
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

  mediaContent: {
    type: 'inline',
    reversed: true,
    seven: true,

    block: {
      gridWrap: 6,
      seven: true,
    },
    image: {
      gridItemSizeAtS: 3,
      paddingSize: 'zero',
      paddingSide: 'sides',
    },
    content: {
      gridItemSizeAtS: 3,
      flexJustify: 'between',
      spacing: true,
      borderColor: 'black',
      borderSide: 'left',
      borderAt: 'large',
      themeBorder: 'darker',
      themeBorderSide: 'left',
      color: 'gray',
      backgroundColor: 'gray--light',
      canBe: 'dark-dark',
      paddingSide: ['top', 'bottom'],
    },
    title: {
      fontSize: 'l',
    },
    meta: {
      themeColor: 'base',
    },
  },

  mediaRow: {
    type: 'stacked',
    seven: true,

    block: {
      gridWrap: true,
      gridItemSize: 3,
      gridItemSizeAtM: 2,
      gridItemSizeAtXL: 1,
      noGridItemClass: true,
      seven: true,
    },
    image: {
      blockIconType: 'gallery',
      gridItemSize: 3,
      gridItemSizeAtM: 2,
      gridItemSizeAtXL: 1,
      noGridItemClass: true,
      paddingSide: 'sides',
      paddingSize: 'zero',
      spaceSide: 'right',
    },
    content: {
      gridItemSize: 3,
      gridItemSizeAtM: 2,
      gridItemSizeAtXL: 1,
      borderSide: 'left',
      noGridItemClass: true,
      spacing: true,
    },
    title: {
      fontSize: 's',
    },
    meta: {
      fontType: 'secondary',
      fontSize: 'xs',
      themeColor: 'base',
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
    titleLink: {
      themeLinkHover: 'light',
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

/**
 * Returns main classes for a MediaBlock element
 * TODO: Check this again if this PR https://github.com/adventistchurch/alps/pull/435 gets merged into ALPS.
 * @param {string} type
 * @param {boolean} reversed
 */
function useMediaBlockClass(type, reversed = false, stackedUntilSmall = false) {
  const classes = [mediaBlockClass, blockClass]

  if (type) {
    classes.push(`${blockClass}__${type}`)

    if (stackedUntilSmall) {
      classes.push(`${blockClass}__stacked--until-small`)
    }

    if (type === 'row') {
      classes.push(`${mediaBlockClass}__${type}`)
    }
  }
  if (reversed) {
    classes.push(`${mediaBlockClass}--reversed`)
  }

  return classes.join(' ')
}

/**
 * The MediaBlock Component
 */
function MediaBlock({
  asBackgroundImage,
  blockIconType,
  blockProps,
  category,
  contentProps,
  cta,
  ctaIcon,
  date,
  dateFormat,
  description,
  image,
  imageProps,
  kicker,
  reversed,
  stackedUntilSmall,
  title,
  titlePrefix,
  type,
  video,
  url,
}) {
  // Get preset props current type
  const preset = presets[type || 'default']

  const isReversed = reversed !== undefined ? reversed : preset.reversed
  const blockType = preset.type || type

  const blockClass = useMediaBlockClass(
    blockType,
    isReversed,
    stackedUntilSmall || preset.stackedUntilSmall
  )

  const _title = title ? (
    <>
      {titlePrefix && <Em themeColor="lighter">{titlePrefix}&nbsp;</Em>}
      {title}
    </>
  ) : null

  return (
    <Div className={blockClass} {...preset.block} {...blockProps}>
      {image && (
        <MediaImage
          blockIconType={blockIconType}
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
        className="c-media-block__content c-block__content"
        spacing
        {...preset.content}
        {...(isReversed ? preset.contentReversed : {})}
        {...contentProps}
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
                themeColor="dark"
                fontType="primary"
                {...preset.title}
              >
                {}
                {url ? (
                  <Link
                    className="c-block__title-link"
                    href={url}
                    themeLinkHover="dark"
                    {...preset.titleLink}
                  >
                    {_title}
                  </Link>
                ) : (
                  _title
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
  image: MediaImage.propTypes.image,
  imageProps: PropTypes.shape(Element.propTypes),
  kicker: PropTypes.string,
  url: PropTypes.string,
  reversed: PropTypes.bool,
  stackedUntilSmall: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  titlePrefix: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  type: PropTypes.oneOf(mediaBlocksTypes),
  video: PropTypes.node,
}

MediaBlock.defaultProps = {
  asBackgroundImage: false,
  ctaIcon: 'arrow-long-right',
  dateFormat: 'date',
}

export default MediaBlock
