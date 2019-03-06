import React from 'react'
import PropTypes from 'prop-types'

import Element, { Link } from '../../helpers/Element'

function FooterPrimaryNavigation({ items }) {
  return (
    <Element as="nav" className="c-footer__primary-nav__list" spacing="half">
      {items.map(({ text, url }, key) => (
        <Link
          href={url}
          className="c-footer__primary-nav__link"
          linkColor="white"
          themeLinkHover="light"
          key={`footer-nav-link-${key}`}
        >
          <strong>{text}</strong>
        </Link>
      ))}
    </Element>
  )
}

FooterPrimaryNavigation.propTypes = {
  items: PropTypes.array,
}
FooterPrimaryNavigation.defaultProps = {
  items: [],
}

export default FooterPrimaryNavigation
