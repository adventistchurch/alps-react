import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '../../helpers/Element'
import Logo from '../../atoms/images/Logo'
import PrimaryNavigation from '../../molecules/navigation/PrimaryNavigation'
import SecondaryNavigation from '../../molecules/navigation/SecondaryNavigation'
import DrawerNavigation from '../../molecules/navigation/DrawerNavigation'

function Header({ drawer, logo, className, primaryNav, secondaryNav }) {
  return (
    <>
      <header className={`c-header ${className}`} role="banner" id="header">
        <div className="c-header--inner">
          <div className="c-header__nav-secondary">
            <SecondaryNavigation {...secondaryNav} />
          </div>
          <div className="c-header__logo c-logo">
            <Link
              canBe={logo.canBeDark ? 'dark-dark' : null}
              className="c-logo__link"
              href={logo.link}
              themePathFill={logo.useFillTheme ? 'base' : null}
            >
              <Logo name={logo.name} />
            </Link>
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
    canBeDark: PropTypes.bool,
    link: PropTypes.string,
    name: PropTypes.string,
    useFillTheme: PropTypes.bool,
  }),
  primaryNav: PropTypes.object,
  secondaryNav: PropTypes.object,
}
Header.defaultProps = {
  className: '',
  drawer: {},
  logo: {
    canBeDark: false,
    link: '/',
    name: 'sda',
    useFillTheme: true,
  },
  primaryNav: {},
  secondaryNav: {},
}

export default Header
