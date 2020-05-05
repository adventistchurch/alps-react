import React from 'react'
import PropTypes from 'prop-types'

import { Link, LI } from '../../helpers/Element'
import useDrawerContext from '../../helpers/useDrawerContext'
import SubNav from './SubNav'
import SubNavArrow from './SubNavArrow'

function getId(text, url) {
  return text ? `${text.toLowerCase().replace(' ', '-')}-${url}` : url
}

function PrimaryNavItem({ active, linkClass, priority, text, subnav, url }) {
  const { isOpen, openSubNav, setOpenSubNav } = useDrawerContext()

  const id = getId(text, url)

  const openClass =
    (!(isOpen.search || isOpen.menu) && active) || openSubNav === id
      ? 'this-is-active'
      : ''

  function onArrowClick(e) {
    e.stopPropagation()
    setOpenSubNav(openSubNav !== id ? id : null)
  }

  return (
    <LI
      className={`c-primary-nav__list-item ${
        subnav ? 'has-subnav' : ''
      } ${openClass}`}
    >
      <Link
        className={`c-primary-nav__link ${openClass} ${linkClass} ${
          priority ? 'is-priority' : ''
        } `}
        href={url}
        color="gray--dark"
        fontType="primary-nav"
        themeLinkHover="base"
        themeBorder="base"
      >
        {text}
      </Link>
      {subnav && <SubNavArrow onClick={onArrowClick} fill="gray" />}
      {subnav && <SubNav items={subnav} className={openClass} type="primary" />}
    </LI>
  )
}

PrimaryNavItem.propTypes = {
  active: PropTypes.bool,
  linkClass: PropTypes.string,
  priority: PropTypes.bool,
  subnav: PropTypes.array,
  text: PropTypes.string.isRequired,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
PrimaryNavItem.defaultProps = {
  active: false,
  linkClass: '',
}

export default PrimaryNavItem
