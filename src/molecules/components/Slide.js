import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../../atoms/images/Picture'

function Slide({
  heading,
  subtitle,
  dek,
  cta,
  url,
  imageSrcSet,
  imageAlt,
  isLazy,
  className,
  textClass,
}) {
  return (
    <div className={`c-carousel__item u-position--relative ${className}`}>
      <Picture image={imageSrcSet} alt={imageAlt} lazy={isLazy} />
      {heading && (
        <div className="c-carousel__item-text__wrap l-grid l-grid--7-col u-shift--left--1-col--at-large">
          <div className="l-grid-item l-grid-item--m--4-col l-grid-item--xl--3-col">
            <div
              className={`c-carousel__item-text ${textClass} u-spacing u-padding--double--top u-padding--double--bottom`}
            >
              <div className="c-carousel__item-text--inner u-spacing--half">
                <h2 className="c-carousel__item-heading u-font--primary--xl">
                  {heading}
                </h2>
                {subtitle && (
                  <h3 className="c-carousel__item-subtitle u-font--secondary--s u-text-transform--upper">
                    {subtitle}
                  </h3>
                )}
                <div className="c-carousel__item-dek">
                  <p>{dek}</p>
                </div>
              </div>
              {cta && url && (
                <a
                  href={url}
                  className="c-carousel__item-cta o-button u-theme--secondary-background-color"
                >
                  {cta}
                </a>
              )}
            </div>
          </div>
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
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string,
  isLazy: PropTypes.bool,
  className: PropTypes.string,
  textClass: PropTypes.string,
}

Slide.defaultProps = {
  isLazy: false,
  className: '',
  textClass: '',
}

export default Slide
