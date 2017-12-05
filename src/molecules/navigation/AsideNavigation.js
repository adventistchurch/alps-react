import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'
import renderItems from '../../helpers/renderItems'

const AsideItem = ({ name, url, icon }) => (
  <li className="aside-nav__list-item rel">
    <a
      className="aside-nav__link theme--primary-text-color font--primary--xs"
      href={url}
    >
      {icon && (
        <span className="icon icon--s va--tbtm">
          <Icon name={icon} color="theme--primary-fill-color" />
        </span>
      )}
      {name}
    </a>
  </li>
)
AsideItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
}

const AsideList = ({ items }) => (
  <ul className="aside-nav__list spacing--quarter">
    {renderItems(items, AsideItem)}
  </ul>
)
AsideList.propTypes = {
  items: PropTypes.array,
}
AsideList.defaultProps = {
  items: [],
}

const AsideNavigation = ({ categoryItems, socialItems }) =>
  (categoryItems.length > 0 || socialItems.length > 0) && (
    <nav
      className="bg--tan aside-nav pad--secondary column__secondary can-be--dark-dark"
      id="aside-nav"
    >
      <div className="spacing">
        <AsideList items={categoryItems} />
        {categoryItems.length > 0 && (
          <hr className="theme--primary-transparent-background-color--30" />
        )}
        <AsideList items={socialItems} />
      </div>
    </nav>
  )

AsideNavigation.propTypes = {
  categoryItems: PropTypes.array,
  socialItems: PropTypes.array,
}
AsideNavigation.defaultProps = {
  categoryItems: [],
  socialItems: [],
}

export default AsideNavigation
