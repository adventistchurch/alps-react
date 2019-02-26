import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../../atoms/images/Picture'

function Slide({
  heading,
  subtitle,
  dek,
  cta,
  url,
  image,
  imageIsLazy,
  className,
  textClass,
  ...others
}) {
  return (
    <div
      className={`c-carousel__item u-position--relative ${className}`}
      {...others}
    >
      <Picture image={image} lazy={imageIsLazy} />
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
                    <strong>{subtitle}</strong>
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
  className: PropTypes.string,
  cta: PropTypes.string,
  dek: PropTypes.string,
  heading: PropTypes.string,
  image: Picture.propTypes.image.isRequired,
  imageIsLazy: Picture.propTypes.bool,
  subtitle: PropTypes.string,
  textClass: PropTypes.string,
  url: PropTypes.string,
}

Slide.defaultProps = {
  className: '',
  textClass: '',
}

export default Slide
