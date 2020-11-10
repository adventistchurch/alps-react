import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import useDrawerContext from '../../helpers/useDrawerContext'

import SecondaryNavItem from './SecondaryNavItem'

function SecondaryNavigation({
  items,
  menuLabel,
  searchLabel,
  showMenu,
  showSearch,
}) {
  const { openDrawer, openDrawerWithSearch } = useDrawerContext()

  return (
    <nav className="c-secondary-nav" role="navigation">
      <ul className="c-secondary-nav__list">
        {renderItems(items, SecondaryNavItem)}
        {showSearch && (
          <SecondaryNavItem
            text={searchLabel}
            icon="search"
            type="search"
            isPriority
            noWrap
            onClick={openDrawerWithSearch}
          />
        )}
        {showMenu && (
          <SecondaryNavItem
            text={menuLabel}
            icon="menu"
            type="menu"
            isPriority
            noWrap
            onClick={openDrawer}
          />
        )}
      </ul>
    </nav>
  )
}
SecondaryNavigation.propTypes = {
  items: PropTypes.array,
  menuLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  showMenu: PropTypes.bool,
  showSearch: PropTypes.bool,
}
SecondaryNavigation.defaultProps = {
  items: [],
  menuLabel: 'Menu',
  searchLabel: 'Search',
  showMenu: true,
  showSearch: true,
}

export default SecondaryNavigation
