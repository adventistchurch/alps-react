import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'

import PrimaryNavSubItem from './PrimaryNavSubItem'

function PrimaryNavItem({ text, url, isActive, subnav }) {
  return (
    <li className={`c-primary-nav__list-item${subnav && ' has-subnav'}`}>
      <a
        className={`c-primary-nav__link u-font--primary-nav u-color--gray--dark u-theme--link-hover--base u-theme--border-color--base ${
          isActive ? 'this-is-active' : ''
        }`}
        href={url}
      >
        {text}
      </a>
      {subnav && (
        <span className="c-subnav__arrow o-arrow--down u-path-fill--gray" />
      )}
      {subnav && (
        <ul className="c-primary-nav__subnav c-subnav">
          {renderItems(subnav, PrimaryNavSubItem)}
        </ul>
      )}
    </li>
  )
}

PrimaryNavItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  subnav: PropTypes.array,
}
PrimaryNavItem.defaultProps = {
  active: false,
}

export default PrimaryNavItem
