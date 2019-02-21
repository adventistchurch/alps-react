import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'
import FooterPrimaryNavigation from '../../molecules/navigation/FooterPrimaryNavigation'
import FooterSecondaryNavigation from '../../molecules/navigation/FooterSecondaryNavigation'

function Footer({ address, copyright, primaryNav, secondaryNav, text }) {
  return (
    <footer
      className="c-footer u-theme--background-color--primary u-theme--background-color--darker"
      role="contentinfo"
    >
      <div className="c-footer--inner u-color--white l-grid l-grid--7-col l-grid-wrap l-grid-wrap--6-of-7">
        <div className="l-grid-item l-grid-item--m--3-col c-footer__description">
          <p className="c-footer__description-text u-font--secondary--m">
            {text}
          </p>
        </div>
        {primaryNav && (
          <div className="l-grid-item l-grid-item--m--3-col l-grid-item--l--1-col c-footer__primary-nav">
            <FooterPrimaryNavigation {...primaryNav} />
          </div>
        )}

        {secondaryNav && (
          <div className="l-grid-item l-grid-item--m--3-col l-grid-item--l--2-col c-footer__secondary-nav">
            <FooterSecondaryNavigation {...secondaryNav} />
          </div>
        )}

        {/* TODO: .c-footer__logo hides the logo */}
        <div className="l-grid-item--7-col l-grid-item--m--1-col c-footer__logo u-path-fill--white">
          <Icon name="logo-round" />
        </div>

        <div className="l-grid-item l-grid-item--m--3-col c-footer__legal">
          <p className="c-footer__copyright">{copyright}</p>
          <address
            className="c-footer__address"
            itemProp="address"
            itemScope=""
            itemType="http://schema.org/PostalAddress"
          >
            <span itemProp="streetAddress">{address.street}</span>,{' '}
            <span itemProp="addressPostCode">{address.postcode}</span>{' '}
            <span itemProp="addressLocality">{address.locality}</span>,{' '}
            <span itemProp="addressRegion">{address.region}</span>{' '}
            {address.country}{' '}
            <a
              itemProp="telephone"
              href={`tel:${address.phone}`}
              className="c-footer__phone u-link--white u-theme--link-hover--light"
            >
              {address.phone}
            </a>
          </address>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string,
    postcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    locality: PropTypes.string,
    region: PropTypes.string,
    country: PropTypes.string,
    phone: PropTypes.string,
  }),
  copyright: PropTypes.string,
  primaryNav: PropTypes.object,
  secondaryNav: PropTypes.object,
  text: PropTypes.string,
}
Footer.defaultProps = {
  address: {
    street: '12501 Old Columbia Pike',
    postcode: '20904',
    locality: 'Silver Spring',
    region: 'MD',
    country: 'USA',
    phone: '301-680-6000',
  },
  copyright: 'Copyright ©2019, General Conference of Seventh-day Adventists',
  text:
    'Adventist.org is the Official website of the Seventh-day Adventist world church',
}

export default Footer
