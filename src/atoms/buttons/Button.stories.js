import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import Button from './Button'

storiesOf('Button', module)
  .add('with text', () => <Button url="http://adventist.io" text="Hello" />)
  .add('with share icon', () => <Button url="#" text="Share" icon="share" />)
  .add('with world icon', () => (
    <Button url="#" text="Hello world" icon="world" />
  ))
