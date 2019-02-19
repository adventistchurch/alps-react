import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'

function FooterSecondaryNavigation({ defaultItemIcon, items }) {
  return (
    <nav className="c-footer__primary-nav__list u-spacing--half">
      {items.map(({ icon, text, url }, key) => (
        <a
          href={url}
          className="c-footer__secondary-nav__link u-link--white u-theme--link-hover--light"
          key={`footer-nav-link-${key}`}
        >
          <IconWrap
            className="u-space--half--right"
            color="white"
            size="xs"
            name={icon || defaultItemIcon}
          />
          <font>{text}</font>
        </a>
      ))}
    </nav>
  )
}

FooterSecondaryNavigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  defaultItemIcon: PropTypes.string,
}
FooterSecondaryNavigation.defaultProps = {
  items: [],
  defaultItemIcon: 'legal',
}

export default FooterSecondaryNavigation
