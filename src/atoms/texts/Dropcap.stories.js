import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Dropcap from './Dropcap'

const propsTab = 'Props'

storiesOf('atoms/texts/Dropcap', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const letter = text('Letter *', 'S', propsTab)
    return <Dropcap letter={letter} />
  })
