import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import { Div } from '../../helpers/Element'
import Slider from '../../helpers/Slider'
import Slide from './Slide'

const sliderSettings = {
  fade: true,
  touchThreshold: 11,
  dots: true,
  adaptiveHeight: true,
}

export default function Carousel({ slides, showArrows, showDots }) {
  return (
    <Div className="c-carousel" position="relative">
      <Slider
        arrowsComponent={
          showArrows
            ? ({ onNext, onPrev }) => {
                return (
                  <div className="c-carousel__controls">
                    <span className="o-arrow__prev" onClick={onPrev}>
                      <IconWrap
                        background="darker"
                        className="c-carousel__arrow c-carousel__arrow--prev u-round"
                        name="arrow-bracket-left"
                        size="s"
                      />
                    </span>
                    <span className="o-arrow__next" onClick={onNext}>
                      <IconWrap
                        background="darker"
                        className="c-carousel__arrow c-carousel__arrow--next u-round"
                        name="arrow-bracket-right"
                        size="s"
                      />
                    </span>
                  </div>
                )
              }
            : null
        }
        className="c-carousel__slides"
        showArrows={showArrows}
        showDots={showDots}
        settings={sliderSettings}
      >
        {slides.map((slide, key) => (
          <Slide {...slide} key={`carousel-slide-${key}`} />
        ))}
      </Slider>
    </Div>
  )
}

Carousel.propTypes = {
  /**
   * Toggles carousel's arrows
   */
  showArrows: PropTypes.bool,
  /**
   * Toggles carousel's dots
   */
  showDots: PropTypes.bool,
  /**
   * List of slides to display
   */
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      cta: PropTypes.string,
      dek: PropTypes.string,
      heading: PropTypes.string,
      image: PropTypes.shape({
        image: PropTypes.shape({
          alt: PropTypes.string.isRequired,
          srcSet: PropTypes.object.isRequired,
        }).isRequired,
        lazy: PropTypes.bool,
        style: PropTypes.object,
      }),
      imageIsLazy: PropTypes.bool,
      subtitle: PropTypes.string,
      textClass: PropTypes.string,
      url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    })
  ),
}
Carousel.defaultProps = {
  showArrows: false,
  showDots: true,
  slides: [],
}
