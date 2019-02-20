import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Figcaption from './Figcaption'

import data from './Figcaption.stories.json'

const propsTab = 'Props'

storiesOf('molecules/media/Figcaption', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const caption = text('Caption *', data.caption, propsTab)
    return <Figcaption>{caption}</Figcaption>
  })
