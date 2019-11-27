import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Highlight from './Highlight'

import data from './Highlight.stories.json'

const propsTab = 'Props'

storiesOf('molecules/text/Highlight', module).addWithJSX('Default', () => {
  const textValue = text('Text *', data.text, propsTab)
  return <Highlight>{textValue}</Highlight>
})
