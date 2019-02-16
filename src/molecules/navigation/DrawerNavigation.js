import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import SearchForm from '../forms/Search'
import useDrawerContext from '../../helpers/useDrawerContext'
import PrimaryNavigation from './PrimaryNavigation'
import SecondaryNavigation from './SecondaryNavigation'

import useMenuContext from '../../helpers/useMenuContext'

function DrawerNavigation({ aboutLeft, aboutRight, primaryNav, secondaryNav }) {
  const { menuIsOpen, setMenuIsOpen, searchHasFocus } = useDrawerContext()

  const onClose = () => setMenuIsOpen(false)

  console.log(secondaryNav)

  return (
    <div
      className={`c-drawer l-grid l-grid--7-col ${
        menuIsOpen ? 'this-is-active' : ''
      }`}
    >
      <div
        className="c-drawer__toggle js-toggle-parent u-theme--background-color-trans--darker"
        onClick={onClose}
      >
        <div className="u-icon o-icon__close">
          <span />
          <span />
        </div>
      </div>
      <div className="l-grid-wrap--6-of-7 l-grid-item--s--6-col c-drawer__container u-spacing u-theme--background-color--darker">
        <div className="c-drawer__search">
          <SearchForm action="some" />
        </div>
        <div className="c-drawer__nav">
          <div className="c-drawer__nav-primary">
            <PrimaryNavigation {...primaryNav} />
            <ul className="c-drawer__subnav u-theme--background-color--darker" />
          </div>
          <div className="c-drawer__nav-secondary">
            <SecondaryNavigation
              {...secondaryNav}
              showLanguages={false}
              showMenu={false}
              showSearch={false}
            />
          </div>
        </div>
        <div className="c-drawer__logo">
          <IconWrap name="logo" fill="white" size="l" />
        </div>
        <div className="c-drawer__about">
          <div className="c-drawer__about-left u-spacing">{aboutLeft}</div>
          <div className="c-drawer__about-right u-spacing--half">
            {aboutRight}
          </div>
        </div>
      </div>
    </div>
  )
}

DrawerNavigation.propTypes = {
  primaryNav: PropTypes.object,
  secondaryNav: PropTypes.object,
  aboutLeft: PropTypes.node,
  aboutRight: PropTypes.node,
}
DrawerNavigation.defaultProps = {
  aboutLeft: (
    <>
      <p>
        Tell the world is an offical media production of the Seventh-day
        Adventist world church.
      </p>
      <p>
        Seventh-day Adventists are devoted to helping people understand the
        Bible to find freedom, healing and hope.
      </p>
    </>
  ),
  aboutRight: (
    <>
      <h3 className="u-font--secondary--s u-text-transform--upper">
        <strong>Learn More:</strong>
      </h3>
      <p className="u-spacing--half">
        <a href="" target="_blank" className="u-link--white">
          Adventist.org
        </a>
        <a href="" target="_blank" className="u-link--white">
          North American Division of Seventh-day Adventists
        </a>
        <a href="" target="_blank" className="u-link--white">
          ADRA International
        </a>
      </p>
    </>
  ),
}

export default DrawerNavigation
