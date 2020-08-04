import React from 'react'
import PropTypes from 'prop-types'

import { Link, Nav } from '../../helpers/Element'

function FooterPrimaryNavigation({ items }) {
  return (
    <Nav className="c-footer__primary-nav__list" spacing="half">
      {items.map(({ text, url, className, onClick, noWrap }, key) => (
        <Link
          href={url}
          className={`c-footer__primary-nav__link ${className}`}
          linkColor="white"
          themeLinkHover="light"
          key={`footer-nav-link-${key}`}
          onClick={onClick}
          noWrap={noWrap}
        >
          <strong>{text}</strong>
        </Link>
      ))}
    </Nav>
  )
}

FooterPrimaryNavigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    })
  ),
}
FooterPrimaryNavigation.defaultProps = {
  items: [],
}

export default FooterPrimaryNavigation
