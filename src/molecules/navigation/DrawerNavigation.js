import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import GridSeven from '../../atoms/grids/GridSeven'
import GridItem from '../../atoms/grids/GridItem'
import SearchForm from '../forms/Search'
import { Div, UL } from '../../helpers/Element'
import useDrawerContext from '../../helpers/useDrawerContext'
import PrimaryNavigation from './PrimaryNavigation'
import SecondaryNavigation from './SecondaryNavigation'

function DrawerNavigation({
  aboutLeft,
  aboutRight,
  onSearch,
  primaryNav,
  secondaryNav,
}) {
  const { closeDrawer, isOpen, setOpenSubNav } = useDrawerContext()

  return (
    <GridSeven
      className={`c-drawer ${isOpen.menu ? 'this-is-active' : ''}`}
      onClick={() => setOpenSubNav(null)}
    >
      <Div
        className="c-drawer__toggle"
        themeBackgroundTrans="darker"
        onClick={closeDrawer}
      >
        {/* TODO: Can this be a SVG icon? */}
        <div className="u-icon o-icon__close">
          <span />
          <span />
        </div>
      </Div>
      <GridItem
        className="c-drawer__container"
        gridWrap="6"
        noGridClass
        noItemClass
        sizeAtS="6"
        spacing
        themeBackground="darker"
      >
        <div className="c-drawer__search">
          <SearchForm onSearch={onSearch} hasFocus={isOpen.search} />
        </div>
        <div className="c-drawer__nav">
          <div className="c-drawer__nav-primary">
            <PrimaryNavigation {...primaryNav} />
            <UL className="c-drawer__subnav" themeBackground="darker">
              {/* TODO: What is this subnav for? Any examples? */}
            </UL>
          </div>
          <div className="c-drawer__nav-secondary">
            <SecondaryNavigation
              showLanguages={false}
              {...secondaryNav}
              showMenu={false}
              showSearch={false}
            />
          </div>
        </div>
        <div className="c-drawer__logo">
          <IconWrap name="logo" fill="white" size="l" />
        </div>
        <div className="c-drawer__about">
          {aboutLeft && (
            <Div className="c-drawer__about-left" spacing>
              {aboutLeft}
            </Div>
          )}
          <Div className="c-drawer__about-right" spacingSize="half">
            {aboutRight}
          </Div>
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

export default DrawerNavigation
