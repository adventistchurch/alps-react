import React from 'react'
import PropTypes from 'prop-types'

import SliderArrow from './SliderArrow'
import useSlider from './useSlider'

export function DefaultContols({ onNext, onPrev }) {
  return (
    <>
      <SliderArrow prev onClick={onPrev} />
      <SliderArrow next onClick={onNext} />
    </>
  )
}
DefaultContols.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
}

function Slider({ children, controls: Controls, className, ...settings }) {
  const {
    initialized,
    listRef,
    onNext,
    onPrev,
    sliderRef,
    slides,
    trackRef,
  } = useSlider(children, settings)

  return (
    <div
      className={`${className} slick-slider ${
        initialized ? 'slick-initialized' : ''
      }`}
      ref={sliderRef}
    >
      <div className="slick-list" aria-live="polite" ref={listRef}>
        <div className="slick-track" role="listbox" ref={trackRef}>
          {slides}
        </div>
      </div>

      {Controls && <Controls onNext={onNext} onPrev={onPrev} />}
    </div>
  )
}

Slider.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  controls: PropTypes.func,
}
Slider.defaultProps = {
  className: '',
  controls: DefaultContols,
}

export default Slider
