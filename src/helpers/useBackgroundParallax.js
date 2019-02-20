import { useState } from 'react'

import useWindowEvent from './useWindowEvent'

/**
 * Sets a parallax effect for an element changing its background position
 *
 * @param {element} element Element used to calculate the effect
 * @param {number} speed Animation speed
 */
function useBackgroundParallax(element, speed = 0) {
  const [top, setTop] = useState(0)

  function calculateTop() {
    // Bailout if no window (for SSR)
    if (!window) return

    const elementBox = element ? element.getBoundingClientRect() : { top: 0 }
    setTop(-((window.pageYOffset - elementBox.top) / speed))
  }

  useWindowEvent('scroll', calculateTop, 0)
  useWindowEvent('resize', calculateTop, 100)

  return { backgroundPosition: `50% ${top}px` }
}

export default useBackgroundParallax
