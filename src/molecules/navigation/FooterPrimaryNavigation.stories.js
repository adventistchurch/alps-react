import React from 'react'
import { storiesOf } from '@storybook/react'
import { object} from '@storybook/addon-knobs'

import { Div } from '../../helpers/Element'
import FooterPrimaryNavigation from './FooterPrimaryNavigation'

import data from './FooterPrimaryNavigation.stories.json'

const propsTab = 'Props'

storiesOf('molecules/navigation/FooterPrimaryNavigation', module)
  

  .addWithJSX('Default', () => {
    const items = object('Total pages', data.items, propsTab)

    return (
      <Div padding themeBackground="darker">
        {/* The Div wrapper is set here only to make the nav visible. Don't include it in your code! */}
        <FooterPrimaryNavigation items={items} />
      </Div>
    )
  })
