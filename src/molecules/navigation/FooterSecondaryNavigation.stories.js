import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs'

import FooterSecondaryNavigation from './FooterSecondaryNavigation'

import data from './FooterSecondaryNavigation.stories.json'

const propsTab = 'Props'

storiesOf('molecules/navigation/FooterSecondaryNavigation', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const items = object('Total pages', data.items, propsTab)

    return <FooterSecondaryNavigation items={items} />
  })
