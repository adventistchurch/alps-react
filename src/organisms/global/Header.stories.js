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

import { useDrawerTab } from '../../molecules/navigation/DrawerNavigation.stories.js'
import { primaryNavTab } from '../../molecules/navigation/PrimaryNavigation.stories.js'
import { secondaryNavTab } from '../../molecules/navigation/SecondaryNavigation.stories.js'
import data from './Header.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Header.defaultProps,
    ...data,
    ...settings,
  }
}

function logoTab(settings = {}) {
  const { logo, tab } = getTabData('Logo', settings)

  const { canBeDark, link, useFillTheme } = logo

  const logoName = select('Logo', Object.keys(logos), 'SDA', tab)

  return {
    element: logos[logoName],
    link: text('Link', link, tab),
    canBeDark: boolean('Logo can be dark', canBeDark, tab),
    useFillTheme: boolean('Logo Use Fill Theme', useFillTheme, tab),
  }
}

function useTabs(settings = {}) {
  return {
    logo: logoTab(settings),
    primaryNav: primaryNavTab(settings),
    secondaryNav: secondaryNavTab(settings),
    drawer: useDrawerTab(settings),
  }
}

export function useHeaderTab(settings = {}) {
  const props = getTabData('Header', settings)
  return useTabs(props)
}

storiesOf('organisms/global/Header', module)
  .addWithJSX('Default', () => {
    const props = useTabs()

    return <Header {...props} />
  })
  .addWithJSX('with search suggestions', () => {
    const props = useTabs({ withSuggestions: true })

    return <Header {...props} />
  })
