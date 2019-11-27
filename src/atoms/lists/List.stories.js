import React from 'react'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

import List from './List'

import data from './List.stories.json'

const propsTab = 'Props'

storiesOf('atoms/lists/List', module)
  .addWithJSX('Unordered', () => {
    const items = object('Items ', data.items, propsTab)
    return <List items={items} as="ul" />
  })

  .addWithJSX('Ordered', () => {
    const items = object('Items ', data.items, propsTab)
    return <List items={items} as="ol" />
  })
