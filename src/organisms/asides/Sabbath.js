import React from 'react'
import PropTypes from 'prop-types'

import Icon, { iconNames } from '../../atoms/icons/Icon'
import InlineStyles from '../../helpers/InlineStyles'

// TODO: replace js-sticky-parent && js-sticky

const logoModes = {
  default: 'l-sabbath__logo u-path-fill--white js-sticky',
  light: 'l-sabbath__logo-light u-path-fill--white',
  dark: 'l-sabbath__logo-dark u-theme--path-fill--base',
}

function SabbathLogo({ logo, mode }) {
  return (
    <div className={logoModes[mode]}>
      <Icon name={logo} />
    </div>
  )
}

SabbathLogo.propTypes = {
  logo: PropTypes.oneOf(iconNames).isRequired,
  mode: PropTypes.oneOf(Object.keys(logoModes)),
}
SabbathLogo.defaultProps = {
  logo: 'logo',
  mode: 'default',
}

function Sabbath({ backgroundImage, logo, showLogo, showLogoOnScroll }) {
  return (
    <aside
      className={`l-wrap__sabbath l-sabbath ${
        backgroundImage ? 'u-background-image--sabbath' : ''
      } js-sticky-parent js-toggle-menu`}
    >
      {backgroundImage ? (
        <>
          <InlineStyles
            styles={`.u-background-image--sabbath { background-image: url('${backgroundImage}') !important; }`}
          />
          {showLogo && <SabbathLogo logo={logo} />}
        </>
      ) : (
        <>
          <div className="l-sabbath__logo js-sticky">
            {showLogo && (
              <div
                className={`l-sabbath__logo--inner ${
                  showLogoOnScroll ? 'js-show-on-scroll is-hidden' : ''
                }`}
              >
                <SabbathLogo logo={logo} mode="light" />
                <SabbathLogo logo={logo} mode="dark" />
              </div>
            )}
          </div>
          <div className="l-sabbath__overlay u-theme--background-color--base" />
        </>
      )}
    </aside>
  )
}

Sabbath.propTypes = {
  backgroundImage: PropTypes.object,
  logo: PropTypes.oneOf(iconNames),
  showLogo: PropTypes.bool,
  showLogoOnScroll: PropTypes.bool,
}
Sabbath.defaultProps = {
  showLogo: true,
  showLogoOnScroll: false,
}

export default Sabbath
