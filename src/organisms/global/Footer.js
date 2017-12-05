import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'

const Footer = ({
  text,
  copyright,
  address,
  regionsText,
  regionsUrl,
  socialLinks,
  legalLinks,
}) => (
  <footer className="footer" role="contentinfo">
    <div className="footer__inner cf bg--medium-brown white can-be--dark-dark">
      <div className="layout-container">
        <div className="footer__unify-nav-desc spacing--until-large">
          <nav className="footer__nav">
            <ul className="inline-list">
              {socialLinks.map((link, key) => {
                return (
                  <li key={key} className="footer__nav-item inline-list__item">
                    <a
                      href={link.url}
                      className="footer__nav-link font--secondary link--white"
                    >
                      {link.text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="footer__desc">
            <span className="icon footer__logo">
              <Icon name="logo" color="fill--light-brown" />
            </span>
            <p className="footer__desc-text brown--light font--secondary">
              {text} &bull;
              <a href={regionsUrl} className="link--white">
                {regionsText}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer__legal bg--brown  can-be--dark-light">
        <div className="footer__legal__inner layout-container spacing--quarter--until-large">
          <div className="footer__unify-copyright-address spacing--quarter--until-large">
            <p className="footer__copyright font--secondary--xs brown--light no-space--btm">
              {copyright}
            </p>
            <address className="footer__address font--secondary--xs brown--light">
              {address}
            </address>
          </div>
          <div className="footer__legal-links font--secondary--xs">
            {legalLinks.map((link, key) => (
              <a
                key={key}
                className={`hover link--brown-light 
                  ${key === legalLinks.length - 1 ? ' space-half--right' : ''}`}
                href={link.url}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  text: PropTypes.string,
  copyright: PropTypes.string,
  address: PropTypes.string,
  regionsText: PropTypes.string,
  regionsUrl: PropTypes.string,
  socialLinks: PropTypes.array,
  legalLinks: PropTypes.array,
}
Footer.defaultProps = {
  text:
    'Adventist.org is the Official website of the Seventh-day Adventist world church',
  copyright: 'Copyright 2017, General Conference of Seventh-day Adventists',
  address: '12501 Old Columbia Pike, Silver Spring, MD 20904, USA 301-680-6000',
  regionsText: 'View regions',
  regionsUrl: '#regions',
  socialLinks: [{ text: 'Facebook', url: '#facebook' }],
  legalLinks: [
    { name: 'Legal Notice', url: '#LegalNotice' },
    { name: 'Trademark and Logo Usage', url: '#TrademarkAndLogo' },
  ],
}

export default Footer
