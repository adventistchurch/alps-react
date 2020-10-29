import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, number, select } from '@storybook/addon-knobs'

import Progress, { sizes } from './Progress'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Progress.defaultProps,
    ...settings,
  }
}

export function progressTab(settings = {}) {
  const { percentage, size, visible, fixed, tab } = getTabData(
    'Progress',
    settings
  )

  return {
    percentage: number('Percentage', percentage, { min: 0, max: 100 }, tab),
    size: select('Size', Object.keys(sizes), size, tab),
    visible: boolean('Visible', visible, tab),
    fixed: boolean('Fixed', fixed, tab),
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
  .addWithJSX('Small', () => {
    const props = progressTab({ size: 'small' })
    return <Progress {...props} />
  })
  .addWithJSX('Medium', () => {
    const props = progressTab({ size: 'medium' })
    return <Progress {...props} />
  })
  .addWithJSX('Large', () => {
    const props = progressTab({ size: 'large' })
    return <Progress {...props} />
  })
  .addWithJSX('Hidden', () => {
    const props = progressTab({ visible: false })
    return <Progress {...props} />
  })
  .addWithJSX('Fixed', () => {
    const props = progressTab({ fixed: true })
    return (
      <div style={{ padding: '1rem' }}>
        <Progress {...props} />
        <h1>
          Scroll untill you see <em>Hello!</em>
        </h1>
        <h1 style={{ marginTop: '150vh' }}>
          <em>Hello!</em>
        </h1>
      </div>
    )
  })
