import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import DrawerNavigation from './DrawerNavigation'

import data from './DrawerNavigation.stories.json'
import { useSearchTab } from '../forms/Search.stories.js'
import { primaryNavTab } from './PrimaryNavigation.stories.js'
import { secondaryNavTab } from './SecondaryNavigation.stories.js'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...DrawerNavigation.defaultProps,
    ...data,
    ...settings,
  }
}

export function useAboutTab(settings = {}) {
  const { aboutLeft, aboutRight, tab } = getTabData('About', settings)

  return {
    aboutLeft: text('About Left', aboutLeft, tab),
    aboutRight: text('About Right', aboutRight, tab),
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
  const props = getTabData('Drawer', settings)

  return useTabs(props)
}

storiesOf('molecules/navigation/DrawerNavigation', module).addWithJSX(
  'Default',
  () => {
    const props = useTabs()

    return <DrawerNavigation {...props} />
  }
)
