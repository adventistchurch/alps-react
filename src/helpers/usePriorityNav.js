import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

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
 * @param {array} items Menu items
 * @returns {Object}
 */
function usePriorityNav(items = []) {
  const total = items.length
  const dropdownRef = useRef()
  const navRef = useRef()
  const wrapperRef = useRef()

  const [hasDropdown, setHasDropdown] = useState(false)
  const [lastVisibleIndex, setLastVisibleIndex] = useState(total - 1)
  const [safeToShow, setSafeToShow] = useState(false)

  const breakpoints = useMemo(() => [], [])
  let priorityWidths = useMemo(() => [], [])

  const priorityItems = useMemo(
    () =>
      items.filter((item, index) => item.priority || index <= lastVisibleIndex),
    [items, lastVisibleIndex]
  )

  // Recalculates lastVisibleIndex and hasDropdown values based on the visible breakpoints
  const onResize = useCallback(() => {
    const wrapper = wrapperRef.current
    const dropdown = dropdownRef.current

    // [Re]calculate wrapper's width
    const wrapperWidth = getElementContentWidth(wrapper)

    // If present, [re]calculate dropdown's width
    const dropdownWidth = dropdown ? getElementContentWidth(dropdown, true) : 0

    const priorityWidth =
      priorityWidths
        .filter(pw => pw <= wrapperWidth - dropdownWidth)
        .slice(-1)[0] || 0

    // Get all visible breakpoints (smaller that wrapper + dropdown widths)
    const visibleBreakpoints = breakpoints.filter(
      bp => bp < wrapperWidth - dropdownWidth - priorityWidth
    )

    // Calculate and set the last visible breakpoint
    setLastVisibleIndex(visibleBreakpoints.length - 1)

    // Calculate and set if dropdown is visible
    setHasDropdown(visibleBreakpoints.length < breakpoints.length)
  }, [breakpoints, priorityWidths])

  useEffect(() => {
    const nav = navRef.current
    let childIndex = 0
    for (const child of nav.children) {
      const item = items[childIndex]
      const childWidth = getElementContentWidth(child)

      const breakpoint =
        breakpoints.length > 0
          ? breakpoints[breakpoints.length - 1] + childWidth
          : childWidth

      breakpoints.push(breakpoint)

      if (item.priority) {
        const priorityWidth =
          priorityWidths.length > 0
            ? priorityWidths[priorityWidths.length - 1] + childWidth
            : childWidth
        priorityWidths.push(priorityWidth)
      }

      childIndex++
    }

    setSafeToShow(true) // Let the user know that menu is safe to display (to avoid flickering)
  }, [breakpoints, items, priorityWidths])

  useWindowEvent('resize', onResize, 50, true)

  return {
    dropdownRef,
    hasDropdown,
    lastVisibleIndex,
    navRef,
    safeToShow,
    wrapperRef,
    priorityItems,
  }
}

export default usePriorityNav
