import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'

import LoginForm from './LoginForm'

import data from './LoginForm.stories.json'

const propsTab = 'Props'
const submitTag = 'Submit'

storiesOf('molecules/forms/LoginForm', module).addWithJSX('Default', () => {
  const title = text('Form Title *', data.title, propsTab)
  const usernameLabel = text('Username', data.usernameLabel, propsTab)
  const passwordLabel = text('Password', data.passwordLabel, propsTab)
  const submitLabel = text('Submit Button', data.submitLabel, propsTab)
  const forgotPwdLabel = text('Password Button', data.forgotPwdLabel, propsTab)
  const formSubmitted = boolean('Form submitted', false, submitTag)
  const submitMessage = text('Submit Message', data.submitMessage, submitTag)
  return (
    <LoginForm
      forgotPwdLabel={forgotPwdLabel}
      forgotPwdUrl={data.forgotPwdUrl}
      passwordLabel={passwordLabel}
      submitLabel={submitLabel}
      submitMessage={formSubmitted ? submitMessage : null}
      title={title}
      usernameLabel={usernameLabel}
    />
  )
})
