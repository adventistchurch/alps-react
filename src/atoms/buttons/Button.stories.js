import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Button from './Button'
import { iconNames } from '../icons/Icon'

const defaults = {
  text: 'Learn More',
  icon: 'share',
  url: 'http://adventist.io',
}

storiesOf('atoms/buttons/Button', module)
  .addDecorator(withKnobs)

  .add('only text', () => {
    const textValue = text('text', defaults.text)
    const url = text('url', defaults.url)
    return <Button url={url} text={textValue} />
  })

  .add('with text and icon', () => {
    const textValue = text('text', defaults.text)
    const icon = select('icon', iconNames, defaults.icon)
    const url = text('url', defaults.url)
    return <Button url={url} text={textValue} icon={icon} />
  })
