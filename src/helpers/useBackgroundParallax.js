import { useRef, useState } from 'react'

import useWindowEvent from './useWindowEvent'

/**
 * Sets a parallax effect for an element changing its background position
 *
 * @param {element} element Element used to calculate the effect
 * @param {number} speed Animation speed
 */
function useBackgroundParallax({ enabled, speed = 0 }) {
  const backgroundRef = useRef(null)
  const [top, setTop] = useState(0)

  function calculateTop() {
    // Bailout if no window (for SSR) nor enabled
    if (!window || !enabled) return

    const backgroundElem = backgroundRef.current

    const elementBox = backgroundElem
      ? backgroundElem.getBoundingClientRect()
      : { top: 0 }
    setTop(-((window.pageYOffset - elementBox.top) / speed))
  }

  useWindowEvent('scroll', calculateTop, 0)
  useWindowEvent('resize', calculateTop, 100)

  return {
    parallaxStyles: enabled ? { backgroundPosition: `50% ${top}px` } : null,
    backgroundRef,
  }
}

export default useBackgroundParallax
