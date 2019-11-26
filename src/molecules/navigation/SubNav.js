import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import SubNavItem from './SubNavItem'

function SubNav({ items, level, type }) {
  const isTertiary = level === 'tertiary'
  const navLevel = isTertiary ? 'subnav__subnav' : 'subnav'

  return (
    <ul className={`c-${type}-nav__${navLevel} c-subnav`}>
      {renderItems(items, SubNavItem, { type, level })}
    </ul>
  )
}

SubNav.propTypes = {
  items: PropTypes.array,
  level: PropTypes.oneOf(['secondary', 'tertiary']),
  type: SubNavItem.propTypes.type,
}
SubNav.defaultProps = {
  items: [],
  level: 'secondary',
}

export default SubNav
