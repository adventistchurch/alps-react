import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../../atoms/images/Picture'

const Slide2Column = ({
  heading,
  subtitle,
  dek,
  cta,
  url,
  className,
  textClass,
}) => (
  <div className={`carousel__item carousel__slide cf spacing rel ${className}`}>
    <div className="flex-container">
      <div className="shift-left--fluid">
        <Picture />
      </div>

      {heading && (
        <div className="shift-right--fluid">
          <div className={`${textClass} spacing--half pad--top`}>
            <h2 className="carousel__slide-heading font--tertiary--l theme--primary-text-color">
              {heading}
            </h2>
            {subtitle && (
              <h3 className="carousel__slide-subtitle font--secondary--m">
                {subtitle}
              </h3>
            )}
            <div className="carousel__slide-dek pad-half--btm">
              <p>{dek}</p>
            </div>
            <a
              href={url}
              className="carousel__slide-cta btn theme--secondary-background-color"
            >
              {cta}
            </a>
          </div>
        </div>
      )}
    </div>
  </div>
)

Slide2Column.propTypes = {
  heading: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  dek: PropTypes.string,
  cta: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
  textClass: PropTypes.string,
}

export default Slide2Column
