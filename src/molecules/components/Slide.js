import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Picture from '../../atoms/images/Picture'
import { Div, HeadingTwo, HeadingThree } from '../../helpers/Element'

export default function Slide({
  heading,
  subtitle,
  dek,
  cta,
  url,
  image,
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
      <Picture {...image} />
      {heading && (
        <Div className="c-carousel__item-text__wrap" seven shiftLeftAt="large">
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
  className: PropTypes.string,
  cta: PropTypes.string,
  dek: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.object,
  subtitle: PropTypes.string,
  textClass: PropTypes.string,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
Slide.defaultProps = {
  className: '',
}
