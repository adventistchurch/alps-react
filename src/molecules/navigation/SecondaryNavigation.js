import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import useDrawerContext from '../../helpers/useDrawerContext'

import SecondaryNavItem from './SecondaryNavItem'
import SecondaryNavLanguageItem from './SecondaryNavLanguageItem'

function SecondaryNavigation({
  items,
  languageProps,
  menuLabel,
  searchLabel,
  showLanguages,
  showMenu,
  showSearch,
}) {
  const { openDrawer, openDrawerWithSearch } = useDrawerContext()

  return (
    <nav className="c-secondary-nav" role="navigation">
      <ul className="c-secondary-nav__list">
        {showLanguages && <SecondaryNavLanguageItem {...languageProps} />}
        {renderItems(items, SecondaryNavItem)}
        {showSearch && (
          <SecondaryNavItem
            text={searchLabel}
            icon="search"
            type="search"
            isPriority
            onClick={openDrawerWithSearch}
          />
        )}
        {showMenu && (
          <SecondaryNavItem
            text={menuLabel}
            icon="menu"
            type="menu"
            isPriority
            onClick={openDrawer}
          />
        )}
      </ul>
    </nav>
  )
}
SecondaryNavigation.propTypes = {
  items: PropTypes.array,
  languageProps: SecondaryNavLanguageItem.propTypes,
  menuLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  showLanguages: PropTypes.bool,
  showMenu: PropTypes.bool,
  showSearch: PropTypes.bool,
}
SecondaryNavigation.defaultProps = {
  items: [],
  menuLabel: 'Menu',
  searchLabel: 'Search',
  showLanguages: true,
  showMenu: true,
  showSearch: true,
}

export default SecondaryNavigation
