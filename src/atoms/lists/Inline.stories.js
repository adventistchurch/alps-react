import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs'

import Inline from './Inline'
import data from './Inline.stories.json'

const propsTab = 'Props'

storiesOf('atoms/lists/Inline', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const items = object('Items', data.items, propsTab)
    return <Inline items={items} />
  })
