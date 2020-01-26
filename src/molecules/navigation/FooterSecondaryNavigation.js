import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import { Nav, Link } from '../../helpers/Element'

function FooterSecondaryNavigation({ defaultItemIcon, items }) {
  return (
    <Nav className="c-footer__primary-nav__list" spacingSize="half">
      {items.map(({ icon, text, url }, key) => (
        <Link
          href={url}
          className="c-footer__secondary-nav__link"
          key={`footer-nav-link-${key}`}
          linkColor="white"
          themeLinkHover="light"
        >
          <IconWrap
            color="white"
            size="xs"
            name={icon || defaultItemIcon}
            spaceSide="right"
            spaceSize="half"
          />
          {/* TODO: a font tag? */}
          <font>{text}</font>
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
