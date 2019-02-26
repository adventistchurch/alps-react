import React, { cloneElement, useEffect, useState, useRef } from 'react'

import useWindowEvent from './useWindowEvent'

const isSet = x => x !== undefined

function getAnimProps() {
  const style = document.body.style

  let transform = 'transform'
  let transition = 'transition'

  if (isSet(style.webkitTransform)) {
    transform = '-webkit-transform'
    transition = 'webkitTransition'
  } else if (isSet(style.msTransform)) {
    transform = '-ms-transform'
    transition = 'msTransition'
  } else if (isSet(style.MozTransform)) {
    transform = '-moz-transform'
    transition = 'MozTransition'
  } else if (isSet(style.OTransform)) {
    transform = '-o-transform'
    transition = 'OTransition'
  }

  return { transform, transition }
}

/**
 * Hook for Slider
 *
 * @param {Array} slides Array of elements
 * @param {Object} settings Slider configuration
 */
export default function useSlider(children = [], settings = {}) {
  const options = { ...defaults, ...settings }
  // Set some states
  const [index, setIndex] = useState(0)
  const [initialized, setInitialized] = useState(0)
  const [slides, setSlides] = useState(null)
  const [slideWidth, setSlideWidth] = useState(0)

  // Set refs
  const sliderRef = useRef()
  const listRef = useRef()
  const trackRef = useRef()

  // Extract options
  const {
    cssEase,
    fade,
    responsive,
    slidesToScroll,
    slidesToShow,
    speed,
  } = options

  const animProps = getAnimProps()

  // Get total slides
  const totalSlides = children.length

  function onPrev() {
    const prevIndex = index === 0 ? totalSlides - 1 : index - slidesToScroll
    onNav(prevIndex)
  }

  function onNext() {
    const nextIndex = index === totalSlides - 1 ? 0 : index + slidesToScroll
    onNav(nextIndex)
  }

  function onNav(index) {
    const { transform } = animProps

    if (!options.fade) {
      const trackElem = trackRef.current
      const trackLeft = -(slideWidth * index)
      trackElem.style[transform] = `translate3d(${trackLeft}px, 0px, 0px)`
    }

    // Update index
    setIndex(index)
  }

  function updateSlides() {
    setSlides(
      React.Children.map(children, (child, i) => {
        const { className, ...childProps } = child.props
        const current = i === index
        const active = fade ? current : i >= index && index + slidesToShow >= i
        const style = fade
          ? {
              width: slideWidth,
              opacity: current ? 1 : 0,
              top: 0,
              left: index === 0 ? 0 : -slideWidth / i,
              position: 'relative',
              transition: current ? `opacity ${speed}ms ${cssEase}` : 'none',
            }
          : { width: slideWidth }

        const slideProps = {
          'aria-hidden': !active,
          className: `${className} slick-slide ${
            active ? 'slick-active' : ''
          } ${current ? 'slick-current' : ''}`,
          role: 'option',
          style,
          tabIndex: -1,
        }

        return cloneElement(child, { ...slideProps, ...childProps })
      })
    )
  }

  function setTransitions() {
    const trackElem = trackRef.current
    const { transition } = animProps

    const animation = fade ? 'opacity' : 'transform'

    trackElem.style[transition] = `${animation} ${speed}ms ${cssEase}`
  }

  function onResize() {
    const sliderElem = sliderRef.current
    const listElem = listRef.current
    const trackElem = trackRef.current
    const { fade } = options

    const sliderWidth = sliderElem.offsetWidth

    if (fade === true) {
      listElem.style.height = '600px'
      trackElem.style.width = `${sliderWidth * totalSlides}px`

      setSlideWidth(sliderWidth)
    } else {
      let itemsToShow = slidesToShow

      if (responsive) {
        const breakpointKey = Object.keys(responsive)
          .reverse()
          .find(bp => parseInt(bp) < sliderWidth)

        const breakpoint = responsive[breakpointKey]
        itemsToShow = breakpoint.slidesToShow
      }

      const slideWidth = Math.floor(sliderWidth / itemsToShow) + 1

      setSlideWidth(slideWidth)

      const trackWidth = slideWidth * totalSlides

      trackElem.style.width = `${trackWidth}px`
    }
  }

  useWindowEvent('resize', onResize, 0, true)

  // Init
  useEffect(() => {
    setTransitions()
    setInitialized(true)
  }, [])

  //
  useEffect(() => {
    updateSlides()
  }, [index, slideWidth])

  return {
    initialized,
    listRef,
    onNext,
    onPrev,
    sliderRef,
    slides,
    trackRef,
  }
}

const defaults = {
  adaptiveHeight: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: 'ease-out',
  // customPaging: (slider, i) => <button type="button">{i}</button>,
  dots: false,
  // dotsClass: 'slick-dots',
  draggable: true,
  easing: 'ease-out',
  fade: false,
  focusOnSelect: false,
  focusOnChange: false,
  infinite: true,
  initialSlide: 0,
  pauseOnHover: true,
  pauseOnFocus: true,
  pauseOnDotsHover: false,
  rows: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  swipe: true,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 11,
  zIndex: 1000,
}
