import React from 'react'
import PropTypes from 'prop-types'

import MediaImage from './MediaImage'
import Button from '../../atoms/buttons/Button'
import Title from '../../atoms/texts/Title'
import Text from '../../atoms/texts/Text'
import Element from '../../helpers/Element'
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
  titleClass,
  titleStrong,
  url,
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
    <Element
      className={classNames}
      borderSide="left"
      spacing
      themeBorder="darker"
      {...moreProps}
    >
      {image && <MediaImage image={image} url={url} />}

      <Title
        as="h3"
        className={titleClass}
        fontSize="m"
        textStyle={titleStrong ? 'strong' : null}
        text={title}
        themeColor="darker"
      >
        {url ? (
          <a
            className="c-block__title-link u-theme--link-hover--dark"
            href={url}
          >
            <strong>{title}</strong>
          </a>
        ) : (
          <strong>{title}</strong>
        )}
      </Title>

      {description && (
        <Text as="p" className={`c-block__body ${descriptionClass}`}>
          {description}
        </Text>
      )}

      {category && (
        <Element
          as="span"
          className="c-block__meta"
          themeColor="dark"
          fontSize="xs"
          fontType="secondary"
        >
          {category}
        </Element>
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
            text={cta}
            url={url}
            className="c-block__button"
            iconClass="u-space--half--left"
            icon="arrow-long-right"
            outline
          />
        )
      )}
    </Element>
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
  titleClass: PropTypes.string,
  titleStrong: PropTypes.bool,
  url: PropTypes.string,
}

ContentBlock.defaultProps = {
  className: '',
  descriptionClass: '',
  titleClass: '',
}

export default ContentBlock
