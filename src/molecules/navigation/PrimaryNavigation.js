import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import useDrawerContext from '../../helpers/useDrawerContext'
import usePriorityNav from '../../helpers/usePriorityNav'

import PrimaryNavigationItem from './PrimaryNavItem'

function PrimaryNavBase({ items, children, ...others }) {
  const { hasDropdown, mainNavRef, wrapperNavRef } = others

  return (
    <nav
      className={`c-primary-nav c-priority-nav priority-nav ${
        hasDropdown ? 'priority-nav-has-dropdown' : ''
      }`}
      ref={wrapperNavRef}
      role="navigation"
    >
      <ul className="c-primary-nav__list c-priority-nav__list" ref={mainNavRef}>
        {renderItems(items, PrimaryNavigationItem)}
      </ul>
      {children}
    </nav>
  )
}
PrimaryNavBase.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.node,
}

function PrimaryNavWithPriority({ items }) {
  const { openDrawer } = useDrawerContext()
  const {
    dropdownRef,
    hasDropdown,
    lastVisibleIndex,
    // safeToShow
    ...rest
  } = usePriorityNav({
    total: items.length,
  })

  const priorityItems = items.filter((item, index) => index <= lastVisibleIndex)

  return (
    <PrimaryNavBase items={priorityItems} {...rest}>
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
    </PrimaryNavBase>
  )
}
PrimaryNavWithPriority.propTypes = {
  items: PropTypes.array,
}

function PrimaryNavigation({ hasPriorityNav, items }) {
  return hasPriorityNav ? (
    <PrimaryNavWithPriority items={items} />
  ) : (
    <PrimaryNavBase items={items} />
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
