import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, select, withKnobs } from '@storybook/addon-knobs'

import Breadcrumbs from './Breadcrumbs'

import data from './Breadcrumbs.stories.json'

const propsTab = 'Props'

storiesOf('molecules/navigation/Breadcrumbs', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const items = object('Items ', data.items, propsTab)
    return <Breadcrumbs items={items} />
  })

  .addWithJSX('Levels', () => {
    const levels = data.items.map((i, k) => k + 1)
    const level = select('Levels', levels, 3, propsTab)
    const items = data.items.slice(0, levels[level - 1])
    items[level - 1].url = undefined // makes sure that last item has no url
    return <Breadcrumbs items={items} />
  })
