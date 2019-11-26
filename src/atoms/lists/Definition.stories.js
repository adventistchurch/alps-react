import React from 'react'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

import Definition from './Definition'
import data from './Definition.stories.json'

const propsTab = 'Props'

storiesOf('atoms/lists/Definition', module)
  

  .addWithJSX('Default', () => {
    const items = object('Items', data.items, propsTab)
    return <Definition items={items} />
  })
