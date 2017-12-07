import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import Icon, { iconNames, iconColors, iconSizes } from './Icon'

const defaults = {
  name: 'logo',
  color: 'fill--blue',
  size: 'xl',
}

storiesOf('atoms/icons/Icon', module)
  .addDecorator(withKnobs)

  .add('default', () => {
    const name = select('name', iconNames, defaults.name)
    const color = select('color', iconColors, defaults.color)
    const size = select('size', iconSizes, defaults.size)
    return <Icon name={name} size={size} color={color} />
  })
