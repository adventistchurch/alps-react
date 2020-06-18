import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text } from '@storybook/addon-knobs'

import Header from './Header'
import SDA from '../../atoms/images/logos/SDA'
import SDAArabic from '../../atoms/images/logos/SDAArabic'
import SDAWithIcon from '../../atoms/images/logos/SDAWithIcon'
import Gain from '../../atoms/images/logos/Gain'

const logos = {
  SDA: <SDA />,
  SDAArabic: <SDAArabic />,
  SDAWithIcon: <SDAWithIcon />,
  Gain: <Gain />,
}

import data from './Header.stories.json'
import { drawerTab } from '../../molecules/navigation/DrawerNavigation.stories.js'
import { primaryNavTab } from '../../molecules/navigation/PrimaryNavigation.stories.js'
import { secondaryNavTab } from '../../molecules/navigation/SecondaryNavigation.stories.js'

function logoTab(settings = {}) {
  const { canBeDark, link, useFillTheme, tab } = {
    tab: 'Logo',
    ...Header.defaultProps.logo,
    link: data.logo.link,
    ...settings,
  }
  const logoName = select('Logo', Object.keys(logos), 'SDA', tab)

  return {
    element: logos[logoName],
    link: text('Link', link, tab),
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

storiesOf('organisms/global/Header', module).addWithJSX('Default', () => {
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
