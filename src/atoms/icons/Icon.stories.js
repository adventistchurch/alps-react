import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import Icon, { iconNames, iconColors, iconSizes } from './Icon'

const stories = storiesOf('atoms/icons/Icon', module)
stories.addDecorator(withKnobs)

stories.add('default', () => {
  const name = select('name', iconNames, 'logo')
  const color = select('color', iconColors, 'fill--blue')
  const size = select('size', iconSizes, 'xl')
  return (
    <div style={{ backgroundColor: '#eee', padding: '1em' }}>
      <Icon name={name} size={size} color={color} />
    </div>
  )
})
