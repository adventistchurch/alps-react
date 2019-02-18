import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Caption from './Caption'

const propsTab = 'Props'

const data = {
  text: 'Proin dictum lobortis luctus.',
}

storiesOf('atoms/texts/Caption', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const captionText = text('Text', data.text, propsTab)
    return <Caption text={captionText} />
  })

  .addWithJSX('As children', () => {
    const captionText = text('Text', data.text, propsTab)
    return <Caption>{captionText}</Caption>
  })
