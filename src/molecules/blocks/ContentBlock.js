import React from 'react'
import PropTypes from 'prop-types'

import MediaImage from './MediaImage'
import Button from '../../atoms/buttons/Button'
import { Div, HeadingThree, Link, Paragraph, Span } from '../../helpers/Element'
import useClasses from '../../helpers/useClasses'
import useToggle from '../../helpers/useToggle'

function ContentBlock({
  category,
  className,
  cta,
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

  const classes = useClasses('c-block c-block__text', {
    'c-block__text-expand': more,
    'has-image': image,
    [openClass]: openClass,
    [className]: className,
  })

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

      {category && (
        <Span
          className="c-block__meta"
          themeColor="dark"
          fontSize="xs"
          fontType="secondary"
        >
          {category}
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
  category: PropTypes.string,
  className: PropTypes.string,
  cta: PropTypes.string,
  description: PropTypes.string,
  image: MediaImage.propTypes.image,
  more: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleProps: PropTypes.object,
  titleSize: PropTypes.oneOf(['s', 'm', 'l']),
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

ContentBlock.defaultProps = {}

export default ContentBlock
