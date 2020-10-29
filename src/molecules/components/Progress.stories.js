import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, number, select } from '@storybook/addon-knobs'

import Button from '../../atoms/buttons/Button'
import { Div } from '../../helpers/Element'
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
  .addWithJSX('Hairline', () => {
    const props = progressTab({ size: 'hairline' })
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
  .addWithJSX('Huge', () => {
    const props = progressTab({ size: 'huge' })
    return <Progress {...props} />
  })
  .addWithJSX('Hidden', () => {
    const props = progressTab({ visible: false })
    return <Progress {...props} />
  })
  .addWithJSX('Fixed', () => {
    const props = progressTab({ fixed: true })
    const [percentage, setPercentage] = useState(50)
    return (
      <Div padding="double" spacing="double">
        <Progress {...props} percentage={percentage} />
        <h1>
          Scroll untill you see <em>Hello!</em>
        </h1>

        {[1, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(x => (
          <Div key={`p-${x}`}>
            <Button text={`Set to ${x}%`} onClick={() => setPercentage(x)} />
          </Div>
        ))}
        <h1 style={{ marginTop: '50vh' }}>
          <em>Hello!</em>
        </h1>
      </Div>
    )
  })
