import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

import Icon, { iconNames, iconColors, iconSizes } from './Icon'

const stories = storiesOf('Icon', module)

stories.addDecorator(withKnobs)

stories.add('default', () => {
  const name = select('Name', iconNames, 'logo')
  const color = select('Color', iconColors, 'fill--blue')
  const size = select('Size', iconSizes, 'xl')
  return (
    <div style={{ backgroundColor: '#eee', padding: '1em' }}>
      <Icon name={name} size={size} color={color} />
    </div>
  )
})
