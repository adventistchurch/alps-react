import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Picture from '../../atoms/images/Picture'
import { Div, HeadingTwo, HeadingThree } from '../../helpers/Element'

/**
 * Slide Item component
 */
export default function Slide({
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
    <Div
      className={`c-carousel__item ${className}`}
      position="relative"
      {...others}
    >
      <Picture image={image} lazy={imageIsLazy} />
      {heading && (
        <Div
          className="c-carousel__item-text__wrap"
          seven
          shiftSide="left"
          shiftAt="large"
        >
          <Div gridItemSizeAtM={4} gridItemSizeAtXL={3}>
            <Div
              className={`c-carousel__item-text ${textClass}`}
              paddingBottom="double"
              paddingTop="double"
              spacing
            >
              <Div className="c-carousel__item-text--inner" spacing="half">
                <HeadingTwo
                  className="c-carousel__item-heading"
                  fontType="primary"
                  fontSize="xl"
                >
                  {heading}
                </HeadingTwo>
                {subtitle && (
                  <HeadingThree
                    className="c-carousel__item-subtitle"
                    fontType="secondary"
                    fontSize="s"
                    transform="upper"
                  >
                    <strong>{subtitle}</strong>
                  </HeadingThree>
                )}
                <div className="c-carousel__item-dek">
                  <p>{dek}</p>
                </div>
              </Div>
              {cta && url && (
                <Button
                  as="a"
                  className="c-carousel__item-cta"
                  href={url}
                  text={cta}
                />
              )}
            </Div>
          </Div>
        </Div>
      )}
    </Div>
  )
}

Slide.propTypes = {
  /**
   * Extra classes for wrapper
   */
  className: PropTypes.string,
  /**
   * Call-to-Action text
   */
  cta: PropTypes.string,
  /**
   * Subhead text.
   */
  dek: PropTypes.string,
  /**
   * Heading text.
   */
  heading: PropTypes.string,
  /**
   * Slide image.
   */
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    srcSet: PropTypes.object.isRequired,
  }).isRequired,
  /**
   * Sets lazy loading for the image.
   */
  imageIsLazy: PropTypes.bool,
  /**
   * Subtitle text.
   */
  subtitle: PropTypes.string,
  /**
   * Extra classes for text wrapper
   */
  textClass: PropTypes.string,
  /**
   * URL for the CTA button
   */
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
Slide.defaultProps = {
  className: '',
  imageIsLazy: true,
}
