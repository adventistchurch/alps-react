import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, withKnobs } from '@storybook/addon-knobs'

import Highlight from './Highlight'

const propsTab = 'Props'
const defaults = {
  textValue:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, est ut viverra euismod, dui dolor gravida massa, sed aliquam ex nisl ut metus. Mauris at ante laoreet, gravida odio gravida, fermentum lectus. Fusce ac sollicitudin purus. Morbi et diam nunc. Praesent fringilla magna nisl, et volutpat nisi tincidunt aliquet. In laoreet ligula vel porttitor condimentum. In mattis ultricies placerat. Morbi interdum hendrerit tempus. Donec consequat elit vitae justo ornare, eget elementum quam consequat. Quisque auctor ex et congue finibus. Proin sed nisl ac velit aliquam euismod non tincidunt lectus. In enim ex, commodo feugiat porttitor sed, eleifend vitae ipsum. Suspendisse lorem nisl, suscipit at tellus quis, porttitor convallissem.',
}

storiesOf('molecules/text/Highlight', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const textValue = text('Text', defaults.textValue, propsTab)
    return <Highlight>{textValue}</Highlight>
  })
