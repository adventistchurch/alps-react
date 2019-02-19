import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Blockquote from './Blockquote'

import data from './Blockquote.stories.json'

const propsTab = 'Props'

storiesOf('atoms/texts/Blockquote', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const captionText = text('Text', data.text, propsTab)
    return <Blockquote text={captionText} />
  })

  .addWithJSX('As Children', () => {
    const captionText = text('Text', data.text, propsTab)
    return <Blockquote>{captionText}</Blockquote>
  })
