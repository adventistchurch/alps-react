import React from 'react'
import { storiesOf } from '@storybook/react'
import { text as textInput, withKnobs } from '@storybook/addon-knobs'

import Kicker from './Kicker'

const propsTab = 'Props'

storiesOf('atoms/texts/Kicker', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const text = textInput('text *', 'A Kicker title', propsTab)
    return <Kicker text={text} />
  })
