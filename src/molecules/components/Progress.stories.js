import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import Progress from './Progress'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Progress.defaultProps,
    ...settings,
  }
}

export function progressTab(settings = {}) {
  const { percentage, tab } = getTabData('Progress', settings)

  return {
    percentage: number('Percentage', percentage, { min: 0, max: 100 }, tab),
  }
}

storiesOf('molecules/components/Progress', module)
  .addWithJSX('Default (simulated progress)', () => {
    const props = progressTab()
    return <Progress {...props} />
  })
  .addWithJSX('With percentage', () => {
    const props = progressTab({ percentage: 50 })
    return <Progress {...props} />
  })
