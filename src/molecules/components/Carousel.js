import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import Slider, { DefaultContols } from '../../helpers/Slider'
import Slide from './Slide'

const sliderProps = {
  fade: true,
  touchThreshold: 11,
  dots: true,
  adaptiveHeight: true,
}

function CarouselControls({ onNext, onPrev }) {
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
CarouselControls.propTypes = DefaultContols.propTypes

function Carousel({ slides, showArrows, outerClass }) {
  return (
    <div className={`c-carousel u-position--relative ${outerClass}`}>
      <Slider
        className="c-carousel__slides"
        controls={showArrows ? CarouselControls : null}
        {...sliderProps}
      >
        {slides.map((slide, key) => (
          <Slide {...slide} key={`carousel-slide-${key}`} />
        ))}
      </Slider>
    </div>
  )
}

Carousel.propTypes = {
  slides: PropTypes.array,
  showArrows: PropTypes.bool,
  outerClass: PropTypes.string,
}
Carousel.defaultProps = {
  slides: [],
  showArrows: true,
}

export default Carousel
