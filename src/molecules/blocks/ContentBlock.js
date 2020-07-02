import React from 'react'
import PropTypes from 'prop-types'

import MediaImage from './MediaImage'
import Button from '../../atoms/buttons/Button'
import Element, {
  Div,
  HeadingThree,
  Link,
  Paragraph,
  Span,
} from '../../helpers/Element'
import DateTimeFormat, { dateFormats } from '../../helpers/DateTimeFormat'
import useClasses from '../../helpers/useClasses'
import useToggle from '../../helpers/useToggle'

function ContentBlock({
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
    },
    `${className} ${openClass}`
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
      {image && <MediaImage image={image} url={url} />}

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
              <DateTimeFormat
                datetime={date}
                locales={dateLocales}
                format={dateFormat}
                style={dateStyle}
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
              spaceSide: 'left',
              spaceSize: 'half',
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
  category: PropTypes.node,
  className: PropTypes.string,
  cta: PropTypes.string,
  date: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.string,
  ]),
  dateFormat: PropTypes.oneOf(dateFormats),
  dateLocales: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  dateStyle: PropTypes.object,
  description: PropTypes.node,
  image: MediaImage.propTypes.image,
  more: PropTypes.string,
  title: PropTypes.node,
  titleProps: PropTypes.object,
  titleSize: PropTypes.oneOf(['s', 'm', 'l']),
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

ContentBlock.defaultProps = {
  className: '',
}

export default ContentBlock
