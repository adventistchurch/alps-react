import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Intro from './Intro'

import data from './Intro.stories.json'

const propsTab = 'Props'

storiesOf('atoms/texts/Intro', module)
  .addWithJSX('With text prop', () => {
    const captionText = text('Text *', data.text, propsTab)
    return <Intro text={captionText} />
  })

  .addWithJSX('With children', () => {
    const captionText = text('Text *', data.text, propsTab)
    return <Intro>{captionText}</Intro>
  })
