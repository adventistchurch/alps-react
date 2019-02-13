import React from 'react'
import PropTypes from 'prop-types'

import MediaImage from './MediaBlock/MediaImage'
import Button from '../../atoms/buttons/Button'
import Title from '../../atoms/texts/Title'
import useToggle from '../../helpers/useToggle'

function ContentBlock({
  title,
  category,
  description,
  more,
  cta,
  url,
  imageSrcSet,
  imageAlt,
}) {
  const { onToggle, openClass } = useToggle()

  const blockClass = `c-block c-block__text u-spacing ${
    more
      ? 'c-block__text-expand u-spacing u-background-color--gray--light u-padding u-clear-fix can-be--dark-dark'
      : 'u-spacing'
  } u-theme--border-color--darker u-border--left ${
    imageSrcSet ? 'has-image' : ''
  } ${openClass}`

  return (
    <div className={blockClass}>
      {imageSrcSet && (
        <MediaImage srcSet={imageSrcSet} alt={imageAlt} url={url} />
      )}

      <Title as="h3" color="darker" text={title} size="m">
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

      {description && <p className="c-block__body text">{description}</p>}

      {category && (
        <span className="c-block__meta u-theme--color--dark u-font--secondary--xs">
          {category}
        </span>
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
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  description: PropTypes.string,
  more: PropTypes.string,
  cta: PropTypes.string,
  url: PropTypes.string,
  blockClass: PropTypes.string,
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string,
}

ContentBlock.defaultProps = {}

export default ContentBlock
