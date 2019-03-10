import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import { Div } from '../../helpers/Element'
import Slider, { DefaultArrows } from '../../helpers/Slider'
import Slide from './Slide'

const sliderSettings = {
  fade: true,
  touchThreshold: 11,
  dots: true,
  adaptiveHeight: true,
}

function CarouselArrows({ onNext, onPrev }) {
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
CarouselArrows.propTypes = DefaultArrows.propTypes

function Carousel({ slides, showArrows, showDots }) {
  return (
    <Div className="c-carousel" position="relative">
      <Slider
        arrowsComponent={showArrows ? CarouselArrows : null}
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
  showArrows: PropTypes.bool,
  showDots: PropTypes.bool,
  slides: PropTypes.array,
}
Carousel.defaultProps = {
  showArrows: false,
  showDots: true,
  slides: [],
}

export default Carousel
