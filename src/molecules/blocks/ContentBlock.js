import React from 'react'
import PropTypes from 'prop-types'

import BlockImage from './BlockImage'
import Button from '../../atoms/buttons/Button'
import Element, {
  Div,
  HeadingThree,
  Link,
  Paragraph,
  Span,
} from '../../helpers/Element'
import DateTime, { dateModes, dateFormats } from '../../helpers/DateTime'
import useClasses from '../../helpers/useClasses'
import useToggle from '../../helpers/useToggle'

export default function ContentBlock({
  category,
  className,
  cta,
  date,
  dateLocales,
  dateFormat,
  dateStyle,
  description,
  image,
  more,
  timeStyle,
  title,
  titleProps,
  titleSize,
  url,
  ...props
}) {
  const { onToggle, openClass } = useToggle()

  const classes = useClasses(
    'c-block c-block__text',
    {
      'c-block__text-expand': more,
      'has-image': image,
      className,
    },
    openClass
  )

  const moreProps = more
    ? {
        canBe: 'dark-dark',
        clearFix: true,
        padding: true,
        backgroundColor: 'gray--light',
      }
    : {}

  return (
    <Div
      className={classes}
      borderSide="left"
      spacing
      themeBorder="darker"
      {...props}
      {...moreProps}
    >
      {image && <BlockImage image={image} url={url} />}

      <HeadingThree
        fontType="primary"
        fontSize={titleSize}
        themeColor="darker"
        {...titleProps}
      >
        {url ? (
          <Link
            className="c-block__title-link"
            themeLinkHover="dark"
            href={url}
          >
            <strong>{title}</strong>
          </Link>
        ) : (
          <strong>{title}</strong>
        )}
      </HeadingThree>

      {description && (
        <Paragraph className={`c-block__body`}>{description}</Paragraph>
      )}

      {(category || date) && (
        <Span
          className="c-block__meta"
          themeColor="dark"
          fontSize="xs"
          fontType="secondary"
        >
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
        </Span>
      )}

      {more ? (
        <>
          <div className="c-block__content">
            <p>{more}</p>
          </div>
          <Button
            as="a"
            className={openClass}
            expand
            onClick={onToggle}
            outline
            toggle
          />
        </>
      ) : (
        cta &&
        url && (
          <Button
            as="a"
            className="c-block__button"
            icon="arrow-long-right"
            iconProps={{
              spaceLeft: 'half',
            }}
            outline
            text={cta}
            url={url}
          />
        )
      )}
    </Div>
  )
}

ContentBlock.propTypes = {
  /**
   * Block's category text.
   */
  category: PropTypes.node,
  /**
   * Extra classes for outer wrap element.
   */
  className: PropTypes.string,
  /**
   * Block's Call-to-Action text.
   */
  cta: PropTypes.string,
  /**
   * Block's date
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
  /**
   * Block's description text.
   */
  description: PropTypes.node,
  /**
   * Block's image data.
   */
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    srcSet: PropTypes.object.isRequired,
  }),
  /**
   * Block's more text (enables a "Show more" button, that replaces the `cta` button)
   */
  more: PropTypes.string,
  /**
   * Block's title text.
   */
  title: PropTypes.node,
  /**
   * Extras title props.
   */
  titleProps: PropTypes.object,
  /**
   * Sets title size.
   */
  titleSize: PropTypes.oneOf(['s', 'm', 'l']),
  /**
   * URL for the Call-to-Action (cta) button .
   */
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
