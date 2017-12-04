import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'

const SubItem = ({ label, url }) => (
  <li className="primary-nav__subnav__list-item">
    <a
      className="primary-nav__subnav__link theme--primary-text-color"
      href={url}
    >
      {label}
    </a>
  </li>
)
SubItem.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
SubItem.defaultProps = {
  active: false,
}

const SubnavToggle = () => (
  <div className="primary-nav__subnav__arrow va--middle js-toggle-parent">
    <span className="arrow--down" />
  </div>
)

const Item = ({ label, url, active, subpages }) => {
  const opts = []
  if (subpages) opts['data-prefix'] = 'hover'

  return (
    <li
      className={`primary-nav__list-item 
        ${subpages && 'primary-nav--with-subnav js-hover'}`}
      {...opts}
    >
      <a
        className={`primary-nav__link theme--primary-text-color 
          ${active && ' theme--secondary-text-color active'}`}
        href={url}
      >
        {label}
      </a>
      {subpages && <SubnavToggle />}
      {subpages && (
        <ul className="primary-nav__subnav">
          {renderItems(subpages, SubItem)}
        </ul>
      )}
    </li>
  )
}

Item.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool,
  subpages: PropTypes.array,
}
Item.defaultProps = {
  active: false,
}

const NavPrimary = ({ items }) => (
  <nav
    id="primary-nav"
    className="primary-nav toggled-element"
    data-active-target="primary-nav"
  >
    {items && <ul className="primary-nav__list">{renderItems(items, Item)}</ul>}
  </nav>
)

NavPrimary.propTypes = {
  items: PropTypes.array,
}
NavPrimary.defaultProps = {
  items: [],
}

export default NavPrimary
