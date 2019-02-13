import React from 'react'
import { storiesOf } from '@storybook/react'
import { array, withKnobs } from '@storybook/addon-knobs'

import Breadcrumbs from './Breadcrumbs'

const propsTab = 'Props'
const defaults = {
  breadcrumbs: [
    { text: 'Home', url: '/' },
    { text: 'Vitality', url: '/vitality' },
    { text: 'Photos' },
  ],
}

storiesOf('molecules/navigation/Breadcrumbs', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const breadcrumbs = array(
      'Breadcrumbs',
      defaults.breadcrumbs,
      ',',
      propsTab
    )
    return <Breadcrumbs items={breadcrumbs} />
  })
