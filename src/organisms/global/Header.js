import React from 'react'
import PropTypes from 'prop-types'

import LogoLink from '../../molecules/images/LogoLink'
import Search from '../../molecules/forms/Search'
import TopHat from '../../organisms/global/TopHat'
import NavToggle from '../../organisms/navigation/NavToggle'
import NavPrimary from '../../organisms/navigation/NavPrimary'
import NavSecondary from '../../organisms/navigation/NavSecondary'

const Header = ({ logo, classNames, menus }) => (
  <header
    className={'header can-be--dark-dark ' + classNames.header}
    role="banner"
    id="header"
  >
    <TopHat />
    <div className="header__inner">
      <NavToggle />
      <div className="header__unify-logo-nav">
        <LogoLink {...logo} isHoriz />
        <LogoLink {...logo} />
        <NavPrimary items={menus.primary} />
      </div>
      <div className="header__utility">
        <div className="header__utility__inner full--until-large">
          <NavSecondary items={menus.secondary} />
          <Search />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  logo: PropTypes.object,
  classNames: PropTypes.object,
  menus: PropTypes.object,
}
Header.defaultProps = {
  logo: { path: '', square: '', horizontal: '', text: '', title: '' },
  classNames: { header: '', content: '' },
  menus: { primary: null, secondary: null },
}

export default Header
