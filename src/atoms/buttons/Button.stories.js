import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Button from './Button'
import { iconNames } from '../icons/Icon'

import data from './Button.stories.json'

const propsTab = 'Props'

storiesOf('atoms/buttons/Button', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const textValue = text('Text *', data.text, propsTab)
    const url = text('URL', data.url, propsTab)
    return <Button url={url} text={textValue} />
  })

  .addWithJSX('Disabled', () => {
    const textValue = text('Text *', data.text, propsTab)
    return <Button url={null} text={textValue} disabled />
  })

  .addWithJSX('Lighter', () => {
    const textValue = text('Text *', data.text, propsTab)
    const url = text('URL', data.url, propsTab)
    return <Button url={url} text={textValue} lighter />
  })

  .addWithJSX('Outline', () => {
    const textValue = text('Text *', data.text, propsTab)
    const url = text('URL', data.url, propsTab)
    return <Button url={url} text={textValue} outline />
  })

  .addWithJSX('Simple', () => {
    const textValue = text('Text *', data.text, propsTab)
    const url = text('URL', data.url, propsTab)
    return <Button url={url} text={textValue} simple />
  })

  .addWithJSX('Small', () => {
    const textValue = text('Text *', data.text, propsTab)
    const url = text('URL', data.url, propsTab)
    return <Button url={url} text={textValue} small />
  })

  .addWithJSX('Toggle', () => {
    return <Button icon="plus" outline toggle small />
  })

  .addWithJSX('With Icon', () => {
    const textValue = text('Text *', data.text, propsTab)
    const icon = select('Icon', iconNames, data.icon, propsTab)
    const url = text('URL', data.url, propsTab)
    return <Button url={url} text={textValue} icon={icon} />
  })
