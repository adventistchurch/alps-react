import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Button from './Button'
import { iconNames } from '../icons/Icon'

const defaultText = 'Learn More'
const defaultUrl = 'http://adventist.io'

storiesOf('atoms/buttons/Button', module)
  .addDecorator(withKnobs)

  .add('only text', () => {
    const textValue = text('text', defaultText)
    const url = text('url', defaultUrl)
    return <Button url={url} text={textValue} />
  })

  .add('with text and icon', () => {
    const textValue = text('text', defaultText)
    const icon = select('icon', iconNames, 'share')
    const url = text('url', defaultUrl)
    return <Button url={url} text={textValue} icon={icon} />
  })
