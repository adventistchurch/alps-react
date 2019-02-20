import { useEffect, useRef, useState } from 'react'

import useWindowEvent from './useWindowEvent'

/**
 * Get innerwidth without padding
 * @param {HTMLElement} element
 * @param {boolean} onlyPadding
 * @returns {number}
 */
function getElementContentWidth(element, onlyPadding = false) {
  // Bailout with 0, if no window (for SSR)
  if (!window) return 0

  const { paddingLeft, paddingRight } = window.getComputedStyle(element)
  const padding = parseFloat(paddingLeft) + parseFloat(paddingRight)

  return onlyPadding ? padding : element.clientWidth - padding
}

/**
 * Hook to calculate the priority navigation for a menu
 * @param {Object} settings `{ enabled: boolean, total: number }`
 * @returns {Object}
 */
function usePriorityNav({ enabled = true, total = 0 }) {
  // Return directly if is not enabled
  if (!enabled)
    return {
      dropdownRef: null,
      hasDropdown: false,
      mainNavRef: null,
      safeToShow: true, // \_😕_/
      wrapperNavRef: null,
    }

  // Set element refs, states and variables
  const dropdownRef = useRef()
  const mainNavRef = useRef()
  const wrapperNavRef = useRef()

  const [hasDropdown, setHasDropdown] = useState(false)
  const [lastVisibleIndex, setLastVisibleIndex] = useState(total - 1)
  const [safeToShow, setSafeToShow] = useState(false)

  const breakpoints = []

  // Initializes breakpoints
  function init() {
    const mainNav = mainNavRef.current

    for (const item of mainNav.children) {
      const itemWidth = getElementContentWidth(item)

      const breakpoint =
        breakpoints.length > 0
          ? breakpoints[breakpoints.length - 1] + itemWidth
          : itemWidth

      breakpoints.push(breakpoint)
    }
  }

  // Recalculates lastVisibleIndex and hasDropdown values based on the visible breakpoints
  function onResize() {
    const wrapper = wrapperNavRef.current
    const dropdown = dropdownRef.current

    // [Re]calculate wrapper's width
    const wrapperWidth = getElementContentWidth(wrapper)

    // If present, [re]calculate dropdown's width
    const dropdownWidth = dropdown ? getElementContentWidth(dropdown, true) : 0

    // Get all visible breakpoints (smaller that wrapper + dropdown widths)
    const visibleBreakpoints = breakpoints.filter(
      bp => bp < wrapperWidth - dropdownWidth
    )

    // Calculate and set the last visible breakpoint
    setLastVisibleIndex(visibleBreakpoints.length - 1)

    // Calculate and set if dropdown is visible
    setHasDropdown(visibleBreakpoints.length < breakpoints.length)
  }

  useEffect(() => {
    init()
    setSafeToShow(true) // Let the user know that menu is safe to display (to avoid flickering)
  }, [])

  useWindowEvent('resize', onResize, 50, true)

  return {
    dropdownRef,
    hasDropdown,
    lastVisibleIndex,
    mainNavRef,
    safeToShow,
    wrapperNavRef,
  }
}

export default usePriorityNav
