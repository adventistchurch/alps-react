import React from 'react'
import { storiesOf } from '@storybook/react'

import BodyContent from './BodyContent'

storiesOf('organisms/content/BodyContent', module).addWithJSX('Default', () => {
  return <BodyContent>Body content goes here...</BodyContent>
})
