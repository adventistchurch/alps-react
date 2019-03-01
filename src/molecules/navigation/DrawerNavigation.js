import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import GridSeven from '../../atoms/grids/GridSeven'
import GridItem from '../../atoms/grids/GridItem'
import SearchForm from '../forms/Search'
import useDrawerContext from '../../helpers/useDrawerContext'
import Element from '../../helpers/Element'
import PrimaryNavigation from './PrimaryNavigation'
import SecondaryNavigation from './SecondaryNavigation'

function DrawerNavigation({
  aboutLeft,
  aboutRight,
  onSearch,
  primaryNav,
  secondaryNav,
}) {
  const { closeDrawer, isOpen } = useDrawerContext()

  return (
    <GridSeven className={`c-drawer ${isOpen.menu ? 'this-is-active' : ''}`}>
      <Element
        className="c-drawer__toggle"
        themeBackgroundTrans="darker"
        onClick={closeDrawer}
      >
        {/* TODO: Can this be a SVG icon? */}
        <div className="u-icon o-icon__close">
          <span />
          <span />
        </div>
      </Element>
      <GridItem
        className="c-drawer__container l-grid-wrap--6-of-7"
        wrap="6"
        sizeAtS="6"
        noItemClass
        spacing
        themeBackground="darker"
      >
        <div className="c-drawer__search">
          <SearchForm onSearch={onSearch} hasFocus={isOpen.search} />
        </div>
        <div className="c-drawer__nav">
          <div className="c-drawer__nav-primary">
            <PrimaryNavigation {...primaryNav} />
            <Element
              as="ul"
              className="c-drawer__subnav"
              themeBackground="darker"
            >
              {/* TODO: What is this subnav for? Any examples? */}
            </Element>
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
      </GridItem>
    </GridSeven>
  )
}

DrawerNavigation.propTypes = {
  aboutLeft: PropTypes.node,
  aboutRight: PropTypes.node,
  onSearch: PropTypes.func,
  primaryNav: PropTypes.object,
  secondaryNav: PropTypes.object,
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
