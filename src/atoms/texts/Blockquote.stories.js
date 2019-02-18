import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Blockquote from './Blockquote'

const propsTab = 'Props'

const data = {
  text: 'Proin dictum lobortis luctus.',
}

storiesOf('atoms/texts/Blockquote', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const captionText = text('Text', data.text, propsTab)
    return <Blockquote text={captionText} />
  })

  .addWithJSX('As children', () => {
    const captionText = text('Text', data.text, propsTab)
    return <Blockquote>{captionText}</Blockquote>
  })
