import React from 'react'
import PropTypes from 'prop-types'

import { LI, Link } from '../../helpers/Element'
import useToggle from '../../helpers/useToggle'
import SubNav from './SubNav'
import SubNavArrow from './SubNavArrow'

function SubNavItem({ active, level, subnav, text, url, type }) {
  const { onToggle, openClass } = useToggle(false)
  const hasSubnav = Array.isArray(subnav) && subnav.length > 0
  const isTertiary = level === 'tertiary'
  const navLevel = isTertiary ? 'subnav__subnav' : 'subnav'

  function onArrowClick(e) {
    e.stopPropagation()
    onToggle()
  }

  return (
    <LI
      className={`c-${type}-nav__${navLevel}__list-item c-subnav__list-item ${
        hasSubnav ? 'has-subnav' : ''
      } ${openClass}`}
      backgroundColor={isTertiary ? null : 'gray--light'}
      themeBackground={isTertiary ? 'base' : null}
    >
      <Link
        className={`c-${type}-nav__${navLevel}__link c-subnav__link ${
          active ? ' active' : ''
        }`}
        href={url}
        color={`gray${type === 'primary' ? '--dark' : ''}`}
        themeLinkHover={isTertiary ? 'lighter' : 'base'}
      >
        {text}
      </Link>

      {hasSubnav && (
        <SubNavArrow
          fill="gray"
          className={openClass}
          onClick={onArrowClick}
          isSubNav
        />
      )}
      {hasSubnav && <SubNav items={subnav} level="tertiary" type={type} />}
    </LI>
  )
}

SubNavItem.propTypes = {
  active: PropTypes.bool,
  level: PropTypes.oneOf(['secondary', 'tertiary']),
  subnav: PropTypes.array,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  url: PropTypes.string.isRequired,
}
SubNavItem.defaultProps = {
  active: false,
}

export default SubNavItem
