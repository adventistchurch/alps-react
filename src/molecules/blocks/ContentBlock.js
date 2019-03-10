import React from 'react'
import PropTypes from 'prop-types'

import MediaImage from './MediaImage'
import Button from '../../atoms/buttons/Button'
import { Div, HeadingThree, Link, Paragraph, Span } from '../../helpers/Element'
import useToggle from '../../helpers/useToggle'

function ContentBlock({
  category,
  className,
  cta,
  description,
  descriptionClass,
  image,
  more,
  title,
  titleProps,
  url,
  ...props
}) {
  const { onToggle, openClass } = useToggle()

  const classes = ['c-block', 'c-block__text']

  if (more) classes.push('c-block__text-expand')
  if (image) classes.push('has-image')
  if (openClass) classes.push(openClass)
  if (className) classes.push(className)

  const classNames = classes.join(' ')

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
      className={classNames}
      borderSide="left"
      spacing
      themeBorder="darker"
      {...props}
      {...moreProps}
    >
      {image && <MediaImage image={image} url={url} />}

      <HeadingThree
        fontType="primary"
        fontSize="m"
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
        <Paragraph className={`c-block__body ${descriptionClass}`}>
          {description}
        </Paragraph>
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
  descriptionClass: PropTypes.string,
  image: MediaImage.propTypes.image,
  more: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleProps: PropTypes.object,
  url: PropTypes.string,
}

ContentBlock.defaultProps = {
  className: '',
  descriptionClass: '',
}

export default ContentBlock
