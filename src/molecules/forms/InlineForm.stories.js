import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import InlineForm from './InlineForm'

const propsTab = 'Props'
const defaults = {
  action: '/doSomething',
  buttonText: 'Submit',
}

storiesOf('molecules/forms/InlineForm', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const action = text('Form Action', defaults.action, propsTab)
    const buttonText = text('Button Text', defaults.buttonText, propsTab)
    return <InlineForm action={action} buttonText={buttonText} />
  })
