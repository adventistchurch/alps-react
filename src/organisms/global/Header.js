import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../atoms/images/Logo'
import PrimaryNavigation from '../../molecules/navigation/PrimaryNavigation'
import SecondaryNavigation from '../../molecules/navigation/SecondaryNavigation'
import DrawerNavigation from '../../molecules/navigation/DrawerNavigation'

function Header({
  drawer,
  logo,
  logoClass,
  className,
  primaryNav,
  secondaryNav,
}) {
  return (
    <>
      <header className={`c-header ${className}`} role="banner" id="header">
        <div className="c-header--inner">
          <div className="c-header__nav-secondary">
            <SecondaryNavigation {...secondaryNav} />
          </div>
          <div className="c-header__logo c-logo">
            <a href="/" className={`c-logo__link ${logoClass}`}>
              <Logo {...logo} />
            </a>
          </div>
          <div className="c-header__nav-primary">
            <PrimaryNavigation {...primaryNav} />
          </div>
        </div>
      </header>
      <DrawerNavigation {...drawer} />
    </>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  drawer: PropTypes.object,
  logo: PropTypes.object,
  logoClass: PropTypes.string,
  primaryNav: PropTypes.object,
  secondaryNav: PropTypes.object,
}
Header.defaultProps = {
  classNames: '',
  drawer: {},
  logo: { path: '', square: '', horizontal: '', text: '', title: '' },
  primaryNav: {},
  secondaryNav: {},
}

export default Header
