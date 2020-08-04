import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import { Nav, Link } from '../../helpers/Element'

function FooterSecondaryNavigation({ defaultItemIcon, items }) {
  return (
    <Nav className="c-footer__primary-nav__list" spacing="half">
      {items.map(({ icon, text, url, className, onClick, noWrap }, key) => (
        <Link
          href={url}
          className={`c-footer__secondary-nav__link ${className}`}
          key={`footer-nav-link-${key}`}
          linkColor="white"
          themeLinkHover="light"
          onClick={onClick}
          noWrap={noWrap}
        >
          <IconWrap
            color="white"
            size="xs"
            name={icon || defaultItemIcon}
            spaceRight="half"
          />
          {text}
        </Link>
      ))}
    </Nav>
  )
}

FooterSecondaryNavigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string.isRequired,
      url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    })
  ),
  defaultItemIcon: PropTypes.string,
}
FooterSecondaryNavigation.defaultProps = {
  items: [],
  defaultItemIcon: 'legal',
}

export default FooterSecondaryNavigation
