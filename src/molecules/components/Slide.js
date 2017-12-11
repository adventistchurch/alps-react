import React from 'react'
import PropTypes from 'prop-types'

import datetimeFormat from '../../helpers/datetimeFormat'

import Picture from '../../atoms/images/Picture'

const Slide = ({
  heading,
  subtitle,
  dek,
  cta,
  url,
  title,
  datetime,
  description,
  imageSrcSet,
  imageAlt,
  isLazy,
  isBlock,
  alignRight,
  className,
  headingClass,
  // textClass,
  blockTitleClass,
  blockContentClass,
}) => {
  const textClass = alignRight ? 'carousel__item--right' : ''
  return (
    <div className={`carousel__item rel ${className}`}>
      <Picture image={imageSrcSet} alt={imageAlt} lazy={isLazy} />

      {heading && (
        <div className="carousel__item-text__wrap">
          <div className="layout-container">
            <div className={`carousel__item-text ${textClass} spacing--half`}>
              <div className="carousel__item-text--inner">
                <h2
                  className={`${
                    headingClass
                  } carousel__item-heading theme--primary-transparent-background-color`}
                >
                  {heading}
                </h2>
                {subtitle && (
                  <h3 className="carousel__item-subtitle font--secondary--m theme--primary-transparent-background-color">
                    {subtitle}
                  </h3>
                )}
                <div className="carousel__item-dek pad-half--btm theme--primary-transparent-background-color">
                  <p>{dek}</p>
                </div>
              </div>
              {cta && (
                <a
                  href={url}
                  className="carousel__item-cta btn theme--secondary-background-color"
                >
                  {cta}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {isBlock && (
        <div
          className={`carousel-block__content block__content spacing--quarter pad ${
            blockContentClass
          }`}
        >
          {title && (
            <h3
              className={`carousel-block__title block__title ${
                blockTitleClass
              }`}
            >
              <a
                href={url}
                className="block__title-link theme--primary-text-color"
              >
                {title}
              </a>
            </h3>
          )}
          {datetime && (
            <time
              className="block__date font--secondary--xs brown space-half--btm"
              dateTime={datetime}
            >
              {datetimeFormat(datetime, 'date')}
            </time>
          )}
          {description && (
            <div className="text pad-half--btm">
              <p className="carousel-block__description block__description">
                <span className="font--primary--xs">{description}</span>
              </p>
            </div>
          )}
          {cta && (
            <p>
              <a
                className="carousel-block__cta block__cta btn theme--secondary-background-color"
                href={url}
              >
                {cta}
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  )
}

Slide.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  dek: PropTypes.string,
  cta: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  datetime: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
  description: PropTypes.string,
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string,
  isLazy: PropTypes.bool,
  isBlock: PropTypes.bool,
  alignRight: PropTypes.bool,
  className: PropTypes.string,
  headingClass: PropTypes.string,
  textClass: PropTypes.string,
  blockTitleClass: PropTypes.string,
  blockContentClass: PropTypes.string,
}
Slide.defaultProps = {
  isLazy: false,
  isBlock: false,
  alignRight: false,
  datetime: '',
  className: '',
  headingClass: '',
  textClass: '',
  blockTitleClass: '',
  blockContentClass: '',
}

export default Slide
