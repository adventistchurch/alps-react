import React from 'react'
import PropTypes from 'prop-types'

import MediaImage from './MediaBlock/MediaImage'
import Button from '../../atoms/buttons/Button'

const ContentBlock = ({
  title,
  titleClass,
  description,
  descriptionMore,
  cta,
  url,
  blockClass,
  imageSrcSet,
  imageAlt,
  imageClass,
}) => {
  const hasImage = imageSrcSet ? 'has-image' : ''
  return (
    <div
      className={`c-block c-block__text ${hasImage} u-theme--border-color--darker u-border--left ${blockClass}`}
    >
      {imageSrcSet && (
        <MediaImage
          srcSet={imageSrcSet}
          alt={imageAlt}
          imageClass={imageClass}
        />
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
      <p className="c-block__body text">{description}</p>
      {descriptionMore && (
        <div className="c-block__content">
          <p>{descriptionMore}</p>
        </div>
      )}
      {descriptionMore && (
        <a
          href=""
          className="o-button o-button--outline o-button--expand js-toggle-parent"
        >
          &nbsp;
        </a>
      )}
      {cta && (
        <Button
          text={cta}
          url={url}
          className="c-block__button o-button o-button--outline"
          icon="arrow-long-right"
          iconClass="u-icon--m u-path-fill--base u-space--half--left"
        />
      )}
    </div>
  )
}

ContentBlock.propTypes = {
  title: PropTypes.string.isRequired,
  titleClass: PropTypes.string,
  description: PropTypes.string,
  descriptionMore: PropTypes.string,
  cta: PropTypes.string,
  url: PropTypes.string,
  blockClass: PropTypes.string,
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string,
  imageClass: PropTypes.string,
}

ContentBlock.defaultProps = {
  descriptionMore: '',
  blockClass: 'u-spacing',
  titleClass: 'u-font--primary--m',
  imageAlt: '',
  imageClass: '',
}

export default ContentBlock
