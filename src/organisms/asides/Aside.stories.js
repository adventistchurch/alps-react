import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs'

import Aside from './Aside'

import data from './Aside.stories.json'

const propsTab = 'Props'

storiesOf('organisms/asides/Aside', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const primary = object('Primary Blocks', data.primary, propsTab)
    const secondary = object('Secondary Blocks', data.secondary, propsTab)

    return <Aside primary={primary} secondary={secondary} />
  })
