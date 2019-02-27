import React, { cloneElement, useEffect, useState, useRef } from 'react'

import useInterval from './useInterval'
import useWindowEvent from './useWindowEvent'
import range from './range'

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
  // Get total slides
  const totalSlides = children.length

  // Get options from default and settings
  const {
    autoplay,
    autoplaySpeed,
    easing,
    fade,
    initialSlide,
    responsive,
    showArrows,
    showDots,
    slidesToScroll,
    slidesToShow,
    speed,
    zIndex,
  } = { ...defaults, ...settings }

  // Set some states
  const [dots, setDots] = useState([])
  const [index, setIndex] = useState(
    initialSlide < totalSlides ? initialSlide : 0
  )
  const [initialized, setInitialized] = useState(0)
  const [paused, setPaused] = useState(false)
  const [slides, setSlides] = useState(null)
  const [transition, setTransition] = useState(null)
  const [slideWidth, setSlideWidth] = useState(0)

  // Set refs
  const sliderRef = useRef()
  const listRef = useRef()
  const trackRef = useRef()

  const animProps = getAnimProps()

  // Autoplay methods

  function onPause() {
    setPaused(true)
  }

  function onPlay() {
    setPaused(false)
  }

  // Nav methods

  function onPrev() {
    const prevIndex = index === 0 ? totalSlides - 1 : index - slidesToScroll
    onNav(prevIndex)
  }

  function onNext() {
    const nextIndex = index === totalSlides - 1 ? 0 : index + slidesToScroll
    onNav(nextIndex)
  }

  function onNav(index) {
    // If fade is disabled
    if (!fade) {
      // Update Track left position
      const trackElem = trackRef.current
      const trackLeft = -(slideWidth * index)
      trackElem.style[
        animProps.transform
      ] = `translate3d(${trackLeft}px, 0px, 0px)`
    }

    // Update index
    setIndex(index)
  }

  // UI Updaters

  function updateDots() {
    setDots(
      range(1, totalSlides).map((label, key) => ({
        active: key === index,
        key,
        label: `${label}`,
        onClick: () => onNav(key),
      }))
    )
  }

  function updateSlides() {
    setSlides(
      React.Children.map(children, (child, i) => {
        const { className, ...childProps } = child.props

        // calculate if is current or active
        const current = i === index
        const active = fade ? current : i >= index && index + slidesToShow >= i

        // Set styles
        const style = fade
          ? {
              left: i === 0 ? 0 : -(slideWidth * i),
              opacity: current ? 1 : 0.2,
              position: 'relative',
              top: 0,
              transition: current ? transition : 'none',
              width: slideWidth,
              zIndex: current ? zIndex + totalSlides + 10 : zIndex + i,
            }
          : { width: slideWidth }

        const slideProps = {
          'aria-hidden': !active,
          className: `${className} slick-slide ${
            active ? 'slick-active' : ''
          } ${current ? 'slick-current' : ''}`,
          onMouseEnter: onPause,
          onMouseLeave: onPlay,
          role: 'option',
          style,
          tabIndex: -1,
        }

        return cloneElement(child, { ...slideProps, ...childProps })
      })
    )
  }

  function initAnimations() {
    const trackElem = trackRef.current
    const animation = fade ? 'opacity' : 'transform'
    const transition = `${animation} ${speed}ms ${easing}`

    if (fade) {
      setTransition(transition)
    } else {
      trackElem.style[animProps.transition] = transition
    }
  }

  function onResize() {
    const sliderElem = sliderRef.current
    const listElem = listRef.current
    const trackElem = trackRef.current

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

  // Effects:

  // Call onReize on resize event
  useWindowEvent('resize', onResize, 0, true)

  // Autoplay
  useInterval(onNext, autoplay ? (paused ? null : autoplaySpeed) : null)

  // Init
  useEffect(() => {
    initAnimations()
    setInitialized(true)
  }, [])

  // Set slides and dots when index or slideWidth changes
  useEffect(() => {
    updateSlides()
    updateDots()
  }, [index, slideWidth])

  return {
    dots,
    initialized,
    listRef,
    onNext,
    onPrev,
    showArrows,
    showDots,
    sliderRef,
    slides,
    trackRef,
  }
}

const defaults = {
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 4000,
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
  showArrows: true,
  showDots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  swipe: true,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 11,
  zIndex: 1000,
}
