import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import useDrawerContext from '../../helpers/useDrawerContext'
import usePriorityNav from '../../helpers/usePriorityNav'

import PrimaryNavigationItem from './PrimaryNavItem'

function PrimaryNavigation({ hasPriorityNav, items }) {
  const { openDrawer } = useDrawerContext()

  const {
    dropdownRef,
    hasDropdown,
    lastVisibleIndex,
    mainNavRef,
    // safeToShow, // Use this to avoid flickering durting calculation
    wrapperNavRef,
  } = usePriorityNav({ enabled: hasPriorityNav, total: items.length })

  const menuItems = hasPriorityNav
    ? items.filter((item, i) => i <= lastVisibleIndex)
    : items

  return (
    <nav
      className={`c-primary-nav c-priority-nav priority-nav ${
        hasDropdown ? 'priority-nav-has-dropdown' : ''
      }`}
      ref={wrapperNavRef}
      role="navigation"
    >
      <ul className="c-primary-nav__list c-priority-nav__list" ref={mainNavRef}>
        {renderItems(menuItems, PrimaryNavigationItem)}
      </ul>

      {hasPriorityNav ? (
        <span
          aria-haspopup={!hasDropdown}
          className="c-priority-nav__dropdown-wrapper priority-nav__wrapper"
        >
          <button
            aria-controls="menu"
            className={`c-priority-nav__toggle priority-nav__dropdown-toggle priority-nav-is-${
              hasDropdown ? 'visible' : 'hidden'
            }`}
            onClick={openDrawer}
            type="button"
            ref={dropdownRef}
          >
            {''}
          </button>
        </span>
      ) : null}
    </nav>
  )
}

PrimaryNavigation.propTypes = {
  hasPriorityNav: PropTypes.bool,
  items: PropTypes.array,
}
PrimaryNavigation.defaultProps = {
  hasPriorityNav: false,
  items: [],
}

export default PrimaryNavigation
