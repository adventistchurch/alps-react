import React from 'react'
import PropTypes from 'prop-types'

import { LI, Link } from '../../helpers/Element'

function SubNavItem({ active, text, url, type }) {
  return (
    <LI
      className={`c-${type}-nav__subnav__list-item c-subnav__list-item`}
      backgroundColor="gray--light"
    >
      <Link
        className={`c-${type}-nav__subnav__link c-subnav__link ${
          active ? ' active' : ''
        }`}
        href={url}
        color={`gray${type === 'primary' ? '--dark' : ''}`}
        themeLinkHover="base"
      >
        {text}
      </Link>
    </LI>
  )
}

SubNavItem.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  url: PropTypes.string.isRequired,
}
SubNavItem.defaultProps = {
  active: false,
}

export default SubNavItem
