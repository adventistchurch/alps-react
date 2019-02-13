import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import Icon, { iconNames } from './Icon'

const propsTab = 'Props'
const defaults = {
  name: 'logo',
}

storiesOf('atoms/icons/Icon', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const name = select('name', iconNames, defaults.name, propsTab)
    return <Icon name={name} />
  })
