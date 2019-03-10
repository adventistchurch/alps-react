import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import ShareTools from './ShareTools'

storiesOf('molecules/components/ShareTools', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    return <ShareTools />
  })
