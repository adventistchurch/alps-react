import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import useDrawerContext from '../../helpers/useDrawerContext'
import usePriorityNav from '../../helpers/usePriorityNav'
import PrimaryNavigationItem from './PrimaryNavItem'

export const NavContext = React.createContext()

export function PrimaryNavBase({
  children,
  hasDropdown,
  items,
  navRef,
  priorityDropdown,
  wrapperRef,
}) {
  const { openSubNav } = useDrawerContext()

  return (
    <nav
      className={`c-primary-nav c-priority-nav priority-nav ${
        hasDropdown ? 'c-priority-nav-has-dropdown' : ''
      }`}
      ref={wrapperRef}
      role="navigation"
    >
      <ul
        className={`c-primary-nav__list c-priority-nav__list ${
          openSubNav !== null ? 'this-is-active' : ''
        }`}
        ref={navRef}
      >
        {children || renderItems(items, PrimaryNavigationItem)}
      </ul>
      {priorityDropdown}
    </nav>
  )
}
PrimaryNavBase.propTypes = {
  children: PropTypes.node,
  drawer: PropTypes.bool,
  hasDropdown: PropTypes.bool,
  items: PropTypes.array,
  navRef: PropTypes.object,
  priorityDropdown: PropTypes.node,
  wrapperRef: PropTypes.object,
}

function PrimaryNavWithPriority({ items }) {
  const { openDrawer } = useDrawerContext()
  const {
    dropdownRef,
    hasDropdown,
    navRef,
    priorityItems,
    wrapperRef,
  } = usePriorityNav(items)

  return (
    <PrimaryNavBase
      hasDropdown={hasDropdown}
      items={priorityItems}
      wrapperRef={wrapperRef}
      navRef={navRef}
      priorityDropdown={
        <span
          aria-haspopup={!hasDropdown}
          className="c-priority-nav__dropdown-wrapper"
        >
          <button
            aria-controls="menu"
            className={`c-priority-nav__dropdown-toggle c-priority-nav--is-${
              hasDropdown ? 'visible' : 'hidden'
            }`}
            onClick={openDrawer}
            type="button"
            ref={dropdownRef}
          ></button>
        </span>
      }
    />
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
