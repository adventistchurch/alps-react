import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '../../helpers/Element'
import SubNav from './SubNav'
import SubNavArrow from './SubNavArrow'

function PrimaryNavItem({ text, url, active, subnav }) {
  return (
    <li className={`c-primary-nav__list-item ${subnav ? 'has-subnav' : ''}`}>
      <Link
        className={`c-primary-nav__link ${active ? 'this-is-active' : ''}`}
        color="gray--dark"
        fontType="primary-nav"
        themeLinkHover="base"
        themeBorder="base"
        href={url}
      >
        {text}
      </Link>
      {subnav && <SubNavArrow fill="gray" />}
      {subnav && <SubNav items={subnav} type="primary" />}
    </li>
  )
}

PrimaryNavItem.propTypes = {
  active: PropTypes.bool,
  subnav: PropTypes.array,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
PrimaryNavItem.defaultProps = {
  active: false,
}

export default PrimaryNavItem
