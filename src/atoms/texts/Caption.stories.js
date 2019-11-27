import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Caption from './Caption'

import data from './Caption.stories.json'

const propsTab = 'Props'

storiesOf('atoms/texts/Caption', module)
  .addWithJSX('Default', () => {
    const captionText = text('Text *', data.text, propsTab)
    return <Caption text={captionText} />
  })

  .addWithJSX('As Children', () => {
    const captionText = text('Text *', data.text, propsTab)
    return <Caption>{captionText}</Caption>
  })
