import React, { cloneElement, useEffect, useState, useRef } from 'react'

import useWindowEvent from './useWindowEvent'

function getAnimProps(options) {
  const bodyStyle = document.body.style

  const position = options.vertical === true ? 'top' : 'left'

  const noPerspective = bodyStyle.perspectiveProperty === undefined

  let animType = 'transform'
  let transform = 'transform'
  let transition = 'transition'

  let cssTransitions

  if (
    bodyStyle.WebkitTransition !== undefined ||
    bodyStyle.MozTransition !== undefined ||
    bodyStyle.msTransition !== undefined
  ) {
    if (options.useCSS === true) {
      cssTransitions = true
    }
  }

  if (options.fade) {
    if (typeof options.zIndex === 'number') {
      if (options.zIndex < 3) {
        options.zIndex = 3
      }
    } else {
      options.zIndex = defaults.zIndex
    }
  }

  if (bodyStyle.OTransform !== undefined) {
    transform = '-o-transform'
    transition = 'OTransition'
    if (noPerspective && bodyStyle.webkitPerspective === undefined)
      animType = false
  }
  if (bodyStyle.MozTransform !== undefined) {
    transform = '-moz-transform'
    transition = 'MozTransition'
    if (noPerspective && bodyStyle.MozPerspective === undefined)
      animType = false
  }
  if (bodyStyle.webkitTransform !== undefined) {
    transform = '-webkit-transform'
    transition = 'webkitTransition'
    if (noPerspective && bodyStyle.webkitPerspective === undefined)
      animType = false
  }
  if (bodyStyle.msTransform !== undefined) {
    transform = '-ms-transform'
    transition = 'msTransition'
    if (bodyStyle.msTransform === undefined) animType = false
  }

  const transformsEnabled =
    options.useTransform && (animType !== null && animType !== false)

  return {
    animType,
    cssTransitions,
    position,
    transform,
    transition,
    transformsEnabled,
  }
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
  const [slides, setSlides] = useState([])
  const [slideWidth, setSlideWidth] = useState(0)

  // Set refs
  const sliderRef = useRef()
  const trackRef = useRef()

  // Extract some settings
  const { responsive, slidesToScroll, slidesToShow } = options

  const animProps = getAnimProps(options)

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
    const { fade } = options

    console.log(slideWidth)

    setSlides(
      React.Children.map(children, (child, i) => {
        const { className, ...childProps } = child.props
        const current = i === index
        const active = fade ? current : i >= index && index + slidesToShow >= i
        const style = fade
          ? { opacity: current ? 1 : 0 }
          : { width: slideWidth }

        const slideProps = {
          'aria-hidden': !active,
          className: `${className} slick-slide ${active ? 'slick-active' : ''}`,
          role: 'option',
          tabIndex: -1,
          style,
        }

        return cloneElement(child, { ...slideProps, ...childProps })
      })
    )
  }

  function setTransitions() {
    const trackElem = trackRef.current
    const { transition } = animProps
    const { cssEase, fade, speed } = options

    const animation = fade ? 'opacity' : 'transform'

    trackElem.style[transition] = `${animation} ${speed}ms ${cssEase}`
  }

  function onResize() {
    const sliderElem = sliderRef.current
    const trackElem = trackRef.current
    const { fade } = options

    if (fade === false && sliderElem) {
      let itemsToShow = slidesToShow
      const sliderWidth = sliderElem.offsetWidth

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
  asNavFor: null,
  prevArrow: '',
  nextArrow: '',
  autoplay: true,
  autoplaySpeed: 4000,
  centerMode: false,
  centerPadding: '50px',
  cssEase: 'ease',
  customPaging: (slider, i) => <button type="button">{i}</button>,
  dots: false,
  dotsClass: 'slick-dots',
  draggable: true,
  easing: 'ease-out',
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  focusOnChange: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: 'ondemand',
  mobileFirst: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  pauseOnDotsHover: false,
  respondTo: 'window',
  responsive: null,
  rows: 1,
  rtl: false,
  slide: '',
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  swipe: true,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 11,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  verticalSwiping: false,
  waitForAnimate: true,
  zIndex: 1000,
}
