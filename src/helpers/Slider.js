import React from 'react'
import PropTypes from 'prop-types'

import SliderArrow from './SliderArrow'
import useSlider from './useSlider'

export function DefaultArrows({ onNext, onPrev }) {
  return (
    <>
      <SliderArrow prev onClick={onPrev} />
      <SliderArrow next onClick={onNext} />
    </>
  )
}
DefaultArrows.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
}

export function DefaultDots({ dots }) {
  return (
    <ul className="slick-dots" role="tablist">
      {dots.map(({ active, key, label, onClick }) => (
        <li
          aria-hidden={!active}
          role="presentation"
          aria-selected={!active}
          aria-controls={`navigation${label}`}
          className={active ? 'slick-active' : ''}
          key={`slider-dot-${key}`}
          onClick={onClick}
        >
          <button
            type="button"
            data-role="none"
            role="button"
            aria-required="false"
            tabIndex="0"
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  )
}
DefaultDots.propTypes = {
  dots: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      key: PropTypes.number,
      label: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
}

function Slider({
  children,
  arrowsComponent: Arrows,
  dotsComponent: Dots,
  className,
  ...settings
}) {
  const {
    dots,
    initialized,
    onNext,
    onPrev,
    onDotClick,
    showArrows,
    showDots,
    sliderRef,
    slides,
    trackRef,
    touchEvents,
  } = useSlider(children, settings)

  return (
    <div
      className={`${className} slick-slider ${
        initialized ? 'slick-initialized' : ''
      }`}
      ref={sliderRef}
    >
      <div className="slick-list" aria-live="polite" {...touchEvents}>
        <div className="slick-track" role="listbox" ref={trackRef}>
          {slides}
        </div>
      </div>
      {showArrows && <Arrows onNext={onNext} onPrev={onPrev} />}
      {showDots && <Dots dots={dots} onClick={onDotClick} />}
    </div>
  )
}

Slider.propTypes = {
  arrowsComponent: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  dotsComponent: PropTypes.func,
}
Slider.defaultProps = {
  arrowsComponent: DefaultArrows,
  className: '',
  dotsComponent: DefaultDots,
}

export default Slider
