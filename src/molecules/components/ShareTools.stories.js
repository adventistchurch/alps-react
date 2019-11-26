import React from 'react'
import { storiesOf } from '@storybook/react'
import { } from '@storybook/addon-knobs'

import ShareTools from './ShareTools'

storiesOf('molecules/components/ShareTools', module)
  

  .addWithJSX('Default', () => {
    return <ShareTools />
  })
