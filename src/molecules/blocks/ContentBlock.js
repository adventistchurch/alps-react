import React from 'react'
import PropTypes from 'prop-types'

import MediaImage from './MediaBlock/MediaImage'
import Button from '../../atoms/buttons/Button'

const ContentBlock = ({
  title,
  category,
  description,
  descriptionMore,
  cta,
  url,
  imageSrcSet,
  imageAlt,
}) => {
  const titleClass = 'u-font--primary--m'
  const blockClass = descriptionMore
    ? 'c-block__text-expand u-spacing u-background-color--gray--light u-padding u-clear-fix can-be--dark-dark'
    : 'u-spacing'
  const imageClass = imageSrcSet && 'has-image'
  return (
    <div
      className={`c-block c-block__text u-spacing ${blockClass} u-theme--border-color--darker u-border--left ${imageClass}`}
    >
      {imageSrcSet && (
        <MediaImage srcSet={imageSrcSet} alt={imageAlt} url={url} />
      )}
      <h3 className={`u-theme--color--darker ${titleClass}`}>
        {url ? (
          <a
            href={url}
            className="c-block__title-link u-theme--link-hover--dark"
          >
            <strong>{title}</strong>
          </a>
        ) : (
          <strong>{title}</strong>
        )}
      </h3>
      {description && <p className="c-block__body text">{description}</p>}
      {category && (
        <span className="c-block__meta u-theme--color--dark u-font--secondary--xs">
          {category}
        </span>
      )}
      {descriptionMore ? (
        <>
          <div className="c-block__content">
            <p>{descriptionMore}</p>
          </div>
          <a
            href=""
            className="o-button o-button--outline o-button--expand js-toggle-parent"
          >
            &nbsp;
          </a>
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
  descriptionMore: PropTypes.string,
  cta: PropTypes.string,
  url: PropTypes.string,
  blockClass: PropTypes.string,
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string,
}

ContentBlock.defaultProps = {}

export default ContentBlock
