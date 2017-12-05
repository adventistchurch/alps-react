import React from 'react'
import PropTypes from 'prop-types'

import LogoLink from '../../molecules/images/LogoLink'
import Search from '../../molecules/forms/Search'
import TopHat from '../../organisms/global/TopHat'
import NavToggle from '../../organisms/navigation/NavToggle'
import NavPrimary from '../../organisms/navigation/NavPrimary'
import NavSecondary from '../../organisms/navigation/NavSecondary'

const Header = ({ logo, className, primaryMenu, secondaryMenu }) => (
  <header
    className={'header can-be--dark-dark ' + className}
    role="banner"
    id="header"
  >
    <TopHat />
    <div className="header__inner">
      <NavToggle />
      <div className="header__unify-logo-nav">
        <LogoLink {...logo} isHoriz />
        <LogoLink {...logo} />
        <NavPrimary items={primaryMenu} />
      </div>
      <div className="header__utility">
        <div className="header__utility__inner full--until-large">
          <NavSecondary items={secondaryMenu} />
          <Search />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  logo: PropTypes.object,
  className: PropTypes.string,
  primaryMenu: PropTypes.array,
  secondaryMenu: PropTypes.array,
}
Header.defaultProps = {
  logo: { path: '', square: '', horizontal: '', text: '', title: '' },
  classNames: '',
  primaryMenu: [],
  secondaryMenu: [],
}

export default Header
