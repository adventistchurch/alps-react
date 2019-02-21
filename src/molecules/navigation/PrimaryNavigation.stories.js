import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, withKnobs } from '@storybook/addon-knobs'

import PrimaryNavigation from './PrimaryNavigation'

import data from './PrimaryNavigation.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...PrimaryNavigation.defaultProps,
    ...data,
    ...settings,
  }
}

export function primaryNavTab(settings = {}) {
  const { hasPriorityNav, items, tab } = getTabData('Primary Nav', settings)

  return {
    hasPriorityNav: boolean('Has Priority Nav', hasPriorityNav, tab),
    items: object('Primary Nav items', items, tab),
  }
}

storiesOf('molecules/navigation/PrimaryNavigation', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const { hasPriorityNav, items } = primaryNavTab()
    return <PrimaryNavigation items={items} hasPriorityNav={hasPriorityNav} />
  })

  .addWithJSX('With Priority Nav', () => {
    const { items, hasPriorityNav } = primaryNavTab({ hasPriorityNav: true })
    return <PrimaryNavigation items={items} hasPriorityNav={hasPriorityNav} />
  })
