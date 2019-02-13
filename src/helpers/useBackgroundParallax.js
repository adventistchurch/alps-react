import { useEffect, useState } from 'react'

/**
 * Sets a parallax effect for an element changing its background position
 *
 * @param {element} element Element used to calculate the effect
 * @param {number} speed Animation speed
 */
function useBackgroundParallax(element, speed = 0) {
  const [top, setTop] = useState(0)

  // event listener
  const listener = () => {
    const elementBox = element ? element.getBoundingClientRect() : { top: 0 }
    setTop(-((window.pageYOffset - elementBox.top) / speed))
  }

  useEffect(() => {
    // Adds listeners on scroll and resize
    window.addEventListener('scroll', listener)
    window.addEventListener('resize', listener)

    // Triggers listener for refresh
    listener()

    // Clear listeners on component unmount
    return () => {
      window.removeEventListener('scroll', listener)
      window.removeEventListener('resize', listener)
    }
  }, [])

  return { backgroundPosition: `50% ${top}px` }
}

export default useBackgroundParallax
