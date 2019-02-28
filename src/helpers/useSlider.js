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

export const getSwipeDirection = (x1, x2, y1, y2, minSwipe = 0) => {
  const xDist = x1 - x2
  const yDist = y1 - y2

  if (isNaN(xDist) || isNaN(yDist) || Math.abs(xDist) < minSwipe) {
    return 0
  }

  const r = Math.atan2(yDist, xDist)
  let swipeAngle = Math.round((r * 180) / Math.PI)

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle)
  }
  if (swipeAngle <= 45 && swipeAngle >= 0) {
    return 1
  }
  if (swipeAngle <= 360 && swipeAngle >= 315) {
    return 1
  }
  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return -1
  }

  return 0
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
    pauseOnHover,
    responsive,
    showArrows,
    showDots,
    slidesToScroll,
    slidesToShow,
    speed,
    touchMove,
    touchThreshold,
    zIndex,
  } = { ...defaults, ...settings }

  // Set some states
  const [dots, setDots] = useState([])
  const [touchStartPos, setTouchStartPos] = useState([])
  const [touchEndPos, setTouchEndPos] = useState([])
  const [index, setIndex] = useState(
    initialSlide < totalSlides ? initialSlide : 0
  )
  const [initialized, setInitialized] = useState(0)
  const [minSwipe, setMinSwipe] = useState(0)
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

  // Drag/Swipe methods

  function getTouchPos(event) {
    const { touches, clientX, clientY } = event
    const { pageX: x = clientX, pageY: y = clientY } = touches ? touches[0] : {}

    return [x, y]
  }

  function onSwipeStart(e) {
    setTouchStartPos(getTouchPos(e))
    setPaused(true)
  }

  function onSwipeMove(e) {
    setTouchEndPos(getTouchPos(e))
  }

  function onSwipeEnd() {
    const [x1, y1] = touchStartPos
    const [x2, y2] = touchEndPos

    const direction = getSwipeDirection(x1, x2, y1, y2, minSwipe)

    if (direction > 0) {
      onNext()
    } else if (direction < 0) {
      onPrev()
    }

    setTouchStartPos([])
    setTouchEndPos([])
    setPaused(false)
  }

  // Set touch events
  const touchEvents = touchMove
    ? {
        onMouseDown: onSwipeStart,
        onMouseMove: onSwipeMove,
        onMouseUp: onSwipeEnd,
        onMouseLeave: onSwipeEnd,
        onTouchStart: onSwipeStart,
        onTouchMove: onSwipeMove,
        onTouchEnd: onSwipeEnd,
        onTouchCancel: onSwipeEnd,
      }
    : {}

  // Set slide mouse events
  const slideEvents = pauseOnHover
    ? {
        onMouseEnter: onPause,
        onMouseLeave: onPlay,
      }
    : {}

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

        const classes = [className, 'slick-slide']
        if (active) classes.push('slick-active')
        if (current) classes.push('slick-current')

        const slideProps = {
          'aria-hidden': !active,
          className: classes.join(' '),
          role: 'option',
          style,
          tabIndex: -1,
          ...slideEvents,
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
    const trackElem = trackRef.current
    const listElem = listRef.current

    const sliderWidth = sliderElem.offsetWidth
    const listWidth = listElem.offsetWidth

    setMinSwipe(listWidth / touchThreshold)

    if (fade === true) {
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
    touchEvents,
    trackRef,
  }
}

const defaults = {
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 4000,
  easing: 'ease-out',
  fade: false,
  infinite: true,
  initialSlide: 0,
  pauseOnHover: true,
  showArrows: true,
  showDots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 11,
  zIndex: 1000,
}
