import React from 'react'
import PropTypes from 'prop-types'

function SecondaryNavSubItem({ active, text, url }) {
  return (
    <li className="c-secondary-nav__subnav__list-item c-subnav__list-item u-background-color--gray--light">
      <a
        className={`c-secondary-nav__subnav__link c-subnav__link u-color--gray u-theme--link-hover--base${
          active ? ' active' : ''
        }`}
        href={url}
      >
        {text}
      </a>
    </li>
  )
}

SecondaryNavSubItem.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
SecondaryNavSubItem.defaultProps = {
  active: false,
}

export default SecondaryNavSubItem
