import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'
import If from '../../helpers/If'
import renderItems from '../../helpers/renderItems'

const SubItem = ({ label, url, active }) => (
  <li className="secondary-nav__subnav__list-item">
    <a
      className={`secondary-nav__subnav__link theme--secondary-background-hover-color--at-medium  ${active &&
        'active'}`}
      href={url}
    >
      <If condition={active}>
        <span className="icon icon--xs icon__check">
          <Icon name="check" />
        </span>
      </If>
      {label}
    </a>
  </li>
)
SubItem.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool,
}
SubItem.defaultProps = {
  subpages: [],
  active: false,
}

const Item = ({ label, url, icon, subpages }) => (
  <li className="secondary-nav__list-item rel">
    <a
      className={`secondary-nav__link theme--secondary-text-color ${subpages &&
        'js-toggle-parent'}`}
      href={url}
    >
      <If condition={icon}>
        <span className="secondary-nav__before-link">
          <Icon name={icon} size="xs" fill="theme--secondary-fill-color" />
        </span>
      </If>
      <strong>{label}</strong>&nbsp;
      <If condition={subpages}>
        <span className="subnav__arrow dib arrow--down va--middle" />
      </If>
    </a>
    <If condition={subpages}>
      <ul className="secondary-nav__subnav__list theme--secondary-background-color">
        {renderItems(subpages, SubItem)}
      </ul>
    </If>
  </li>
)

Item.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string,
  subpages: PropTypes.array,
}

const NavSecondary = ({ items }) => (
  <nav className="secondary-nav toggled-element" id="secondary-nav">
    <If condition={items}>
      <ul className="secondary-nav__list">{renderItems(items, Item)}</ul>
    </If>
  </nav>
)
NavSecondary.propTypes = {
  items: PropTypes.array,
}
NavSecondary.defaultProps = {
  items: [],
}

export default NavSecondary
