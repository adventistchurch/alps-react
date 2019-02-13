import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import CommentForm from './CommentForm'

const propsTab = 'Props'
const defaults = {
  action: '/doSomething',
  title: 'Leave a comment',
  buttonText: 'Post comment',
}

storiesOf('molecules/forms/CommentForm', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const action = text('Form Action', defaults.action, propsTab)
    const title = text('Form Title', defaults.title, propsTab)
    const buttonText = text('Button Text', defaults.buttonText, propsTab)
    return <CommentForm action={action} title={title} buttonText={buttonText} />
  })
