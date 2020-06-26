import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text } from '@storybook/addon-knobs'

import DrawerLinks from './DrawerLinks'

import data from './DrawerLinks.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...DrawerLinks.defaultProps,
    ...data,
    ...settings,
  }
}

export function useDrawerLinkTab(settings = {}) {
  const { title, items, tab } = getTabData('Drawer Links', settings)

  return {
    title: text('Title ', title, tab),
    items: object('Links Items ', items, tab),
  }
}

storiesOf('molecules/navigation/DrawerLinks', module).addWithJSX(
  'Default',
  () => {
    const props = useDrawerLinkTab()

    return <DrawerLinks {...props} />
  }
)
