import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../atoms/images/Logo'
import PrimaryNavigation from '../../molecules/navigation/PrimaryNavigation'
import SecondaryNavigation from '../../molecules/navigation/SecondaryNavigation'
import DrawerNavigation from '../../molecules/navigation/DrawerNavigation'

function Header({ drawer, logo, className, primaryNav, secondaryNav }) {
  const { canBeDark, useFillTheme, ...logoProps } = logo
  const logoClass = `${canBeDark ? 'can-be--dark-dark' : ''} ${
    useFillTheme ? 'u-theme--path-fill--base' : ''
  }`

  return (
    <>
      <header className={`c-header ${className}`} role="banner" id="header">
        <div className="c-header--inner">
          <div className="c-header__nav-secondary">
            <SecondaryNavigation {...secondaryNav} />
          </div>
          <div className="c-header__logo c-logo">
            <a href="/" className={`c-logo__link ${logoClass}`}>
              <Logo {...logoProps} />
            </a>
          </div>
          <div className="c-header__nav-primary">
            <PrimaryNavigation {...primaryNav} hasPriorityNav />
          </div>
        </div>
      </header>
      <DrawerNavigation
        primaryNav={primaryNav}
        secondaryNav={secondaryNav}
        {...drawer}
      />
    </>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  drawer: PropTypes.object,
  logo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    canBeDark: PropTypes.bool,
    useFillTheme: PropTypes.bool,
  }),
  logoClass: PropTypes.string,
  primaryNav: PropTypes.object,
  secondaryNav: PropTypes.object,
}
Header.defaultProps = {
  className: '',
  drawer: {},
  logo: {
    name: 'sda',
    canBeDark: false,
    useFillTheme: true,
  },
  primaryNav: {},
  secondaryNav: {},
}

export default Header
