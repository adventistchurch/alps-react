import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import { Link, LI } from '../../helpers/Element'
import useDrawerContext from '../../helpers/useDrawerContext'
import SubNav from './SubNav'
import SubNavArrow from './SubNavArrow'

function useItemId(text, url) {
  return useMemo(
    () => (text ? `${text.toLowerCase().replace(' ', '-')}-${url}` : url),
    [text, url]
  )
}

function PrimaryNavItem({
  active,
  linkClass,
  priority,
  text,
  subnav,
  url,
  onClick,
  noWrap,
}) {
  const { isOpen, openSubNav, setOpenSubNav } = useDrawerContext()

  const id = useItemId(text, url)

  const openClass =
    (!(isOpen.search || isOpen.menu) && active) || openSubNav === id
      ? 'this-is-active'
      : ''

  const onArrowClick = useCallback(
    e => {
      e.stopPropagation()
      setOpenSubNav(openSubNav !== id ? id : null)
    },
    [id, openSubNav, setOpenSubNav]
  )

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
        onClick={onClick}
        noWrap={noWrap}
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
  onClick: PropTypes.func,
  priority: PropTypes.bool,
  subnav: PropTypes.array,
  text: PropTypes.string.isRequired,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  noWrap: PropTypes.bool,
}
PrimaryNavItem.defaultProps = {
  active: false,
  linkClass: '',
}

export default PrimaryNavItem
