import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import PrimaryNavigationItem from './PrimaryNavItem'

function PrimaryNavigation({ items }) {
  return (
    <nav className="c-primary-nav c-priority-nav" role="navigation">
      <ul className="c-primary-nav__list c-priority-nav__list">
        {renderItems(items, PrimaryNavigationItem)}
      </ul>
    </nav>
  )
}

PrimaryNavigation.propTypes = {
  items: PropTypes.array,
}
PrimaryNavigation.defaultProps = {
  items: [],
}

export default PrimaryNavigation
