import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs'

import FooterPrimaryNavigation from './FooterPrimaryNavigation'

import data from './FooterPrimaryNavigation.stories.json'

const propsTab = 'Props'

storiesOf('molecules/navigation/FooterPrimaryNavigation', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const items = object('Total pages', data.items, propsTab)

    return <FooterPrimaryNavigation items={items} />
  })
