import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import DrawerNavigation from './DrawerNavigation'
import DrawerLinks from './DrawerLinks'

import data from './DrawerNavigation.stories.json'
import { useSearchTab } from '../forms/Search.stories.js'
import { primaryNavTab } from './PrimaryNavigation.stories.js'
import { secondaryNavTab } from './SecondaryNavigation.stories.js'
import { useDrawerLinkTab } from './DrawerLinks.stories.js'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...DrawerNavigation.defaultProps,
    ...data,
    ...settings,
  }
}

export function useAboutTab(settings = {}) {
  const { aboutLeft, aboutRight, withDrawerLinks, tab } = getTabData(
    'About',
    settings
  )

  const linksProps = useDrawerLinkTab(settings)

  const showDrawerLinks = boolean('with Drawer Links', withDrawerLinks, tab)

  return {
    aboutLeft: text('About Left', aboutLeft, tab),
    aboutRight: showDrawerLinks ? (
      <DrawerLinks {...linksProps} />
    ) : (
      text('About Right', aboutRight, tab)
    ),
  }
}

function useTabs(settings = {}) {
  return {
    ...primaryNavTab(settings),
    ...secondaryNavTab(settings),
    search: useSearchTab(settings),
    ...useAboutTab(settings),
  }
}

export function useDrawerTab(settings = {}) {
  return useTabs({ tab: 'Drawer', ...settings })
}

storiesOf('molecules/navigation/DrawerNavigation', module)
  .addWithJSX('Default', () => {
    const props = useTabs()

    return <DrawerNavigation {...props} />
  })
  .addWithJSX('with Drawer Links', () => {
    const props = useTabs({ withDrawerLinks: true })

    return <DrawerNavigation {...props} />
  })
