import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select} from '@storybook/addon-knobs'

import Header from './Header'
import { logoNames } from '../../atoms/images/logos'

import data from './Header.stories.json'
import { drawerTab } from '../../molecules/navigation/DrawerNavigation.stories.js'
import { primaryNavTab } from '../../molecules/navigation/PrimaryNavigation.stories.js'
import { secondaryNavTab } from '../../molecules/navigation/SecondaryNavigation.stories.js'

function logoTab(settings = {}) {
  const { canBeDark, name, useFillTheme, tab } = {
    tab: 'Logo',
    ...Header.defaultProps.logo,
    name: data.logo.name,
    ...settings,
  }

  return {
    name: select('Logo Name', logoNames, name, tab),
    canBeDark: boolean('Logo can be dark', canBeDark, tab),
    useFillTheme: boolean('Logo Use Fill Theme', useFillTheme, tab),
  }
}

export function headerTab(settings = {}) {
  const tabProps = {
    tab: 'Header',
    ...Header.defaultProps,
    ...settings,
  }

  return {
    logo: logoTab(tabProps),
    primaryNav: primaryNavTab(tabProps),
    secondaryNav: secondaryNavTab(tabProps),
    drawer: drawerTab(tabProps),
  }
}

storiesOf('organisms/global/Header', module)
  

  .addWithJSX('Default', () => {
    const logo = logoTab()
    const primaryNav = primaryNavTab()
    const secondaryNav = secondaryNavTab()
    const drawer = drawerTab()

    return (
      <Header
        drawer={drawer}
        logo={logo}
        primaryNav={primaryNav}
        secondaryNav={secondaryNav}
      />
    )
  })
