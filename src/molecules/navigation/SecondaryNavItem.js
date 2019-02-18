import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import renderItems from '../../helpers/renderItems'

import SecondaryNavSubItem from './SecondaryNavSubItem'

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
      <a
        className="c-secondary-nav__link u-font--secondary-nav u-color--gray u-theme--link-hover--base"
        href={onClick ? '#' : url}
        onClick={onClick}
      >
        {icon && <IconWrap name={icon} size="xs" fill="gray" />}
        {text}&nbsp;
        {subnav && <span className="c-subnav__arrow o-arrow--down" />}
      </a>
      {subnav && (
        <ul className="c-secondary-nav__subnav c-subnav">
          {renderItems(subnav, SecondaryNavSubItem)}
        </ul>
      )}
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
