import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs'

import { Div } from '../../helpers/Element'
import FooterSecondaryNavigation from './FooterSecondaryNavigation'

import data from './FooterSecondaryNavigation.stories.json'

const propsTab = 'Props'

storiesOf('molecules/navigation/FooterSecondaryNavigation', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const items = object('Total pages', data.items, propsTab)

    return (
      <Div padding themeBackground="darker">
        {/* The Div wrapper is set here only to make the nav visible. Don't include it in your code! */}
        <FooterSecondaryNavigation items={items} />
      </Div>
    )
  })
