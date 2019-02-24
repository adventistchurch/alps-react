import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import BodyContent from './BodyContent'

storiesOf('organisms/content/BodyContent', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    return <BodyContent>Body content goes here...</BodyContent>
  })
