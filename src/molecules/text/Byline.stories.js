import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Byline from './Byline'

const propsTab = 'Props'
const defaults = {
  textValue: 'Michael Smith',
}

storiesOf('molecules/text/Byline', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const textValue = text('Byline', defaults.textValue, propsTab)
    return <Byline>{textValue}</Byline>
  })
