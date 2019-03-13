import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'
import { Div, Link, Paragraph } from '../../helpers/Element'
import FooterPrimaryNavigation from '../../molecules/navigation/FooterPrimaryNavigation'
import FooterSecondaryNavigation from '../../molecules/navigation/FooterSecondaryNavigation'

function Footer({ address, copyright, primaryNav, secondaryNav, text }) {
  return (
    <Div
      as="footer"
      className="c-footer"
      role="contentinfo"
      themeBackground="darker" // TODO: ALPS was setting inexistent .u-theme--background-color--primary, along with .u-theme--background-color--darker. There was a reason behind that?
    >
      <Div className="c-footer--inner" color="white" seven gridWrap={6}>
        <Div className="c-footer__description" gridItemSizeAtM={3}>
          <Paragraph
            className="c-footer__description-text"
            fontSize="m"
            fontType="secondary"
          >
            {text}
          </Paragraph>
        </Div>
        {primaryNav && (
          <Div
            className="c-footer__primary-nav"
            gridItemSizeAtM={3}
            gridItemSizeAtL={1}
          >
            <FooterPrimaryNavigation {...primaryNav} />
          </Div>
        )}

        {secondaryNav && (
          <Div
            className="c-footer__secondary-nav"
            gridItemSizeAtM={3}
            gridItemSizeAtL={2}
          >
            <FooterSecondaryNavigation {...secondaryNav} />
          </Div>
        )}

        {/* TODO: .c-footer__logo hides the logo */}
        <Div
          className="c-footer__logo"
          noGridItemClass
          gridItemSize={7}
          gridItemSizeAtM={1}
          pathFill="white"
        >
          <Icon name="logo-round" />
        </Div>

        <Div className="c-footer__legal" gridItemSizeAtM={3}>
          <p className="c-footer__copyright">{copyright}</p>
          {address && (
            <address
              className="c-footer__address"
              itemProp="address"
              itemScope=""
              itemType="http://schema.org/PostalAddress"
            >
              {address.street && (
                <>
                  <span itemProp="streetAddress">{address.street}</span>,{' '}
                </>
              )}
              {address.postcode && (
                <>
                  <span itemProp="addressPostCode">{address.postcode}</span>{' '}
                </>
              )}
              {address.locality && (
                <>
                  <span itemProp="addressLocality">{address.locality}</span>,{' '}
                </>
              )}
              {address.region && (
                <>
                  <span itemProp="addressRegion">{address.region}</span>{' '}
                </>
              )}
              {address.country}{' '}
              {address.phone && (
                <Link
                  className="c-footer__phone"
                  href={`tel:${address.phone}`}
                  itemProp="telephone"
                  linkColor="white"
                  themeLinkHover="light"
                >
                  {address.phone}
                </Link>
              )}
            </address>
          )}
        </Div>
      </Div>
    </Div>
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
