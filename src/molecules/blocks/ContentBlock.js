import React from 'react'
import PropTypes from 'prop-types'

import MediaImage from './MediaImage'
import Button from '../../atoms/buttons/Button'
import Title from '../../atoms/texts/Title'
import Text from '../../atoms/texts/Text'
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

  const blockClass = `c-block c-block__text u-spacing ${
    more
      ? 'c-block__text-expand u-spacing u-background-color--gray--light u-padding u-clear-fix can-be--dark-dark'
      : 'u-spacing'
  } u-theme--border-color--darker u-border--left ${
    image ? 'has-image' : ''
  } ${openClass} ${className}`

  return (
    <div className={blockClass}>
      {image && <MediaImage {...image} url={url} />}

      <Title
        as="h3"
        themeColor="darker"
        text={title}
        size="m"
        className={titleClass}
        style={titleStrong ? 'strong' : null}
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
        <Text
          as="span"
          className='"c-block__meta'
          color="dark"
          fontSize="xs"
          fontType="secondary"
        >
          {category}
        </Text>
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
    </div>
  )
}

ContentBlock.propTypes = {
  category: PropTypes.string,
  className: PropTypes.string,
  cta: PropTypes.string,
  description: PropTypes.string,
  descriptionClass: PropTypes.string,
  image: PropTypes.objectOf(MediaImage.propTypes.image),
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
