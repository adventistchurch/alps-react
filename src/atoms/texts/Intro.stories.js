import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Intro from './Intro'

import data from './Intro.stories.json'

const propsTab = 'Props'

storiesOf('atoms/texts/Intro', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const captionText = text('Text', data.text, propsTab)
    return <Intro text={captionText} />
  })

  .addWithJSX('As Children', () => {
    const captionText = text('Text', data.text, propsTab)
    return <Intro>{captionText}</Intro>
  })
