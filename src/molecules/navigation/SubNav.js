import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import SubNavItem from './SubNavItem'

function SubNav({ items, type }) {
  return (
    <ul className={`c-${type}-nav__subnav c-subnav`}>
      {renderItems(items, SubNavItem, { type })}
    </ul>
  )
}

SubNav.propTypes = {
  items: PropTypes.array,
  type: SubNavItem.propTypes.type,
}
SubNav.defaultProps = {
  items: [],
}

export default SubNav
