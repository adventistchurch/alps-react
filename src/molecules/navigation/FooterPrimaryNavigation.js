import React from 'react'
import PropTypes from 'prop-types'

function FooterPrimaryNavigation({ items }) {
  return (
    <nav className="c-footer__primary-nav__list u-spacing--half">
      {items.map(({ text, url }, key) => (
        <a
          href={url}
          className="c-footer__primary-nav__link u-theme--link-hover--light u-link--white"
          key={`footer-nav-link-${key}`}
        >
          <strong>{text}</strong>
        </a>
      ))}
    </nav>
  )
}

FooterPrimaryNavigation.propTypes = {
  items: PropTypes.array,
}
FooterPrimaryNavigation.defaultProps = {
  items: [],
}

export default FooterPrimaryNavigation
