import React from 'react'
import PropTypes from 'prop-types'

function SubNavItem({ active, text, url, type }) {
  return (
    <li
      className={`c-${type}-nav__subnav__list-item c-subnav__list-item u-background-color--gray--light`}
    >
      <a
        className={`c-${type}-nav__subnav__link c-subnav__link u-color--gray${
          type === 'primary' ? '--dark' : ''
        } u-theme--link-hover--base${active ? ' active' : ''}`}
        href={url}
      >
        {text}
      </a>
    </li>
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
