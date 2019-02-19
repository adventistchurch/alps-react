import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import usePriorityNav from '../../helpers/usePriorityNav'

import SubNav from './SubNav'
import SubNavArrow from './SubNavArrow'

function PrimaryNavItem({ text, url, active, subnav }) {
  const itemRef = useRef()
  const { registerItem, enabled } = usePriorityNav()

  if (enabled) registerItem(itemRef, text)

  return (
    <li
      className={`c-primary-nav__list-item ${subnav ? 'has-subnav' : ''}`}
      ref={itemRef}
    >
      <a
        className={`c-primary-nav__link u-font--primary-nav u-color--gray--dark u-theme--link-hover--base u-theme--border-color--base ${
          active ? 'this-is-active' : ''
        }`}
        href={url}
      >
        {text}
      </a>
      {subnav && <SubNavArrow fill="gray" />}
      {subnav && <SubNav items={subnav} type="primary" />}
    </li>
  )
}

PrimaryNavItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool,
  subnav: PropTypes.array,
}
PrimaryNavItem.defaultProps = {
  active: false,
}

export default PrimaryNavItem
