import React from 'react'
import PropTypes from 'prop-types'

function PrimaryNavSubItem({ isActive, text, url }) {
  return (
    <li className="c-primary-nav__subnav__list-item c-subnav__list-item u-background-color--gray--light">
      <a
        className={`c-primary-nav__subnav__link c-subnav__link u-color--gray--dark u-theme--link-hover--base ${
          isActive ? 'this-is-active' : ''
        }`}
        href={url}
      >
        {text}
      </a>
    </li>
  )
}

PrimaryNavSubItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
PrimaryNavSubItem.defaultProps = {
  isActive: false,
}

export default PrimaryNavSubItem
