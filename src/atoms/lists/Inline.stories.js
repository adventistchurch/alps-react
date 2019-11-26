import React from 'react'
import { storiesOf } from '@storybook/react'
import { object} from '@storybook/addon-knobs'

import Inline from './Inline'
import data from './Inline.stories.json'

const propsTab = 'Props'

storiesOf('atoms/lists/Inline', module)
  

  .addWithJSX('Default', () => {
    const items = object('Items', data.items, propsTab)
    return <Inline items={items} />
  })
