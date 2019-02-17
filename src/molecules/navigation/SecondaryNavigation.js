import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import useDrawerContext from '../../helpers/useDrawerContext'

import SecondaryNavItem from './SecondaryNavItem'
import SecondaryNavLanguageItem from './SecondaryNavLanguageItem'

function SecondaryNavigation({ items, showLanguages, showMenu, showSearch }) {
  const { setIsOpen, setSearchHasFocus } = useDrawerContext()

  const openMenu = ({ withSearch = false } = {}) => event => {
    event.preventDefault()
    setIsOpen(true)
    setSearchHasFocus(withSearch)
  }

  return (
    <nav className="c-secondary-nav" role="navigation">
      <ul className="c-secondary-nav__list">
        {showLanguages && <SecondaryNavLanguageItem />}
        {renderItems(items, SecondaryNavItem)}
        {showSearch && (
          <SecondaryNavItem
            text="Search"
            icon="search"
            isPriority
            onClick={openMenu({ withSearch: true })}
          />
        )}
        {showMenu && (
          <SecondaryNavItem
            text="Menu"
            icon="menu"
            isPriority
            onClick={openMenu()}
          />
        )}
      </ul>
    </nav>
  )
}
SecondaryNavigation.propTypes = {
  items: PropTypes.array,
  showLanguages: PropTypes.bool,
  showMenu: PropTypes.bool,
  showSearch: PropTypes.bool,
}
SecondaryNavigation.defaultProps = {
  items: [],
  showLanguages: true,
  showMenu: true,
  showSearch: true,
}

export default SecondaryNavigation