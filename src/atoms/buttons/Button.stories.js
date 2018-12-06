import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Button from './Button'
import { iconNames } from '../icons/Icon'

const defaults = {
  text: 'Learn More',
  icon: 'share',
  url: '#',
}

storiesOf('atoms/buttons/Button', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const textValue = text('text', defaults.text)
    const url = text('url', defaults.url)
    return <Button url={url} text={textValue} />
  })

  .add('Disabled', () => {
    const textValue = text('text', defaults.text)
    return <Button url={null} text={textValue} disabled />
  })

  .add('Lighter', () => {
    const textValue = text('text', defaults.text)
    const url = text('url', defaults.url)
    return <Button url={url} text={textValue} lighter />
  })

  .add('Outline', () => {
    const textValue = text('text', defaults.text)
    const url = text('url', defaults.url)
    return <Button url={url} text={textValue} outline />
  })

  .add('Simple', () => {
    const textValue = text('text', defaults.text)
    const url = text('url', defaults.url)
    return <Button url={url} text={textValue} simple />
  })

  .add('Small', () => {
    const textValue = text('text', defaults.text)
    const url = text('url', defaults.url)
    return <Button url={url} text={textValue} small />
  })

  .add('Toggle', () => {
    return <Button icon="plus" outline toggle small className="js-toggle" />
  })

  .add('With icon', () => {
    const textValue = text('text', defaults.text)
    const icon = select('icon', iconNames, defaults.icon)
    const url = text('url', defaults.url)
    return <Button url={url} text={textValue} icon={icon} />
  })
