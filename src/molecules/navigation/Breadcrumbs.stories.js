import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, select } from '@storybook/addon-knobs'

import Breadcrumbs from './Breadcrumbs'

import data from './Breadcrumbs.stories.json'

const propsTab = 'Props'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Breadcrumbs.defaultProps,
    ...data,
    ...settings,
  }
}

export function breadcrumbsTab(settings = {}) {
  const { items, tab } = getTabData('Breadcrumbs', settings)

  return {
    items: object('Breadcrumbs Items ', items, tab),
  }
}

storiesOf('molecules/navigation/Breadcrumbs', module)
  .addWithJSX('Default', () => {
    const { items } = breadcrumbsTab()

    return <Breadcrumbs items={items} />
  })

  .addWithJSX('Levels', () => {
    const levels = data.items.map((i, k) => k + 1)
    const level = select('Levels', levels, 3, propsTab)
    const items = data.items.slice(0, levels[level - 1])
    items[level - 1].url = undefined // makes sure that last item has no url
    return <Breadcrumbs items={items} />
  })
