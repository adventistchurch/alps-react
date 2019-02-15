import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs'

import PrimaryNavigation from './PrimaryNavigation'

import data from './PrimaryNavigation.stories.json'

const propsTab = 'Props'

storiesOf('molecules/navigation/PrimaryNavigation', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const items = object('Items', data.items, propsTab)
    return <PrimaryNavigation items={items} />
  })
