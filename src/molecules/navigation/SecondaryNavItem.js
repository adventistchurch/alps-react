import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import { Link } from '../../helpers/Element'

import SubNav from './SubNav'
import SubNavArrow from './SubNavArrow'

function SecondaryNavItem({
  icon,
  isPriority,
  onClick,
  subnav,
  type,
  text,
  url,
}) {
  return (
    <li
      className={`c-secondary-nav__list-item ${
        isPriority ? 'is-priority' : ''
      } ${subnav ? 'has-subnav' : ''} ${
        type ? `c-secondary-nav__list-item__${type}` : ''
      }
      `}
    >
      <Link
        className="c-secondary-nav__link"
        color="gray"
        fontType="secondary-nav"
        href={onClick ? '#' : url}
        onClick={onClick}
        themeLinkHover="base"
      >
        {icon && <IconWrap name={icon} size="xs" fill="gray" />}
        {text}&nbsp;
        {subnav && <SubNavArrow />}
      </Link>
      {subnav && <SubNav items={subnav} type="secondary" />}
    </li>
  )
}

SecondaryNavItem.propTypes = {
  icon: PropTypes.string,
  isPriority: PropTypes.bool,
  onClick: PropTypes.func,
  subnav: PropTypes.array,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['search', 'menu']),
  url: PropTypes.string,
}
SecondaryNavItem.defaultProps = {
  isPriority: false,
  url: '#',
}

export default SecondaryNavItem
