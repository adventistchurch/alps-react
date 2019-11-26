import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '../../helpers/Element'
import useDrawerContext from '../../helpers/useDrawerContext'
import SubNav from './SubNav'
import SubNavArrow from './SubNavArrow'

function PrimaryNavItem({ active, text, url, subnav }) {
  const { isOpen, openSubNav, setOpenSubNav } = useDrawerContext()

  const id = `${text.toLowerCase().replace(' ', '-')}-${url}`

  const openClass =
    (!(isOpen.search || isOpen.menu) && active) || openSubNav === id
      ? 'this-is-active'
      : ''

  function onArrowClick(e) {
    e.stopPropagation()
    setOpenSubNav(openSubNav !== id ? id : null)
  }

  return (
    <li
      className={`c-primary-nav__list-item ${
        subnav ? 'has-subnav' : ''
      } ${openClass}`}
    >
      <Link
        className={`c-primary-nav__link ${openClass}`}
        color="gray--dark"
        fontType="primary-nav"
        themeLinkHover="base"
        themeBorder="base"
        href={url}
      >
        {text}
      </Link>
      {subnav && <SubNavArrow onClick={onArrowClick} fill="gray" />}
      {subnav && <SubNav items={subnav} className={openClass} type="primary" />}
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
