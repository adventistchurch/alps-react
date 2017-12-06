import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Button from './Button'
import { iconNames } from '../icons/Icon'

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs)

stories.add('only text', () => {
  const textValue = text('Text', 'Learn More')
  return <Button url="http://adventist.io" text={textValue} />
})
stories.add('with text and icon', () => {
  const textValue = text('Text', 'Learn More')
  const icon = select('Icon', iconNames, 'share')
  return <Button url="#" text={textValue} icon={icon} />
})
