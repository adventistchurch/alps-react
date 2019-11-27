import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import DrawerNavigation from './DrawerNavigation'

import data from './DrawerNavigation.stories.json'
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

function aboutTextsTab(settings = {}) {
  const { aboutLeft, aboutRight, tab } = getTabData('About texts', settings)

  return {
    aboutLeft: text('About Left', aboutLeft, tab),
    aboutRight: text('About Right', aboutRight, tab),
  }
}

export function drawerTab(settings = {}) {
  const { aboutLeft, aboutRight, tab } = getTabData('Drawer', settings)

  return {
    ...primaryNavTab({ tab }),
    ...secondaryNavTab({ tab }),
    ...aboutTextsTab({ aboutLeft, aboutRight, tab }),
  }
}

storiesOf('molecules/navigation/DrawerNavigation', module).addWithJSX(
  'Default',
  () => {
    const primaryNav = primaryNavTab()
    const secondaryNav = secondaryNavTab()
    const { aboutLeft, aboutRight } = aboutTextsTab()

    return (
      <DrawerNavigation
        aboutLeft={aboutLeft}
        aboutRight={aboutRight}
        primaryNav={primaryNav}
        secondaryNav={secondaryNav}
      />
    )
  }
)
