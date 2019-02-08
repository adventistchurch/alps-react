import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Figcaption from './Figcaption'

const propsTab = 'Props'
const defaults = {
  caption: 'Proin dictum lobortis luctus.',
}

storiesOf('molecules/media/Figcaption', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const caption = text('Caption', defaults.caption, propsTab)
    return <Figcaption>{caption}</Figcaption>
  })
