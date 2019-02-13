import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'

import LoginForm from './LoginForm'

const propsTab = 'Props'
const defaults = {
  action: '/doSomething',
  titleText: 'Login',
  usernameText: 'Username',
  pwdText: 'Password',
  buttonText: 'Login',
  forgotPwdText: 'Forgot Password?',
  submitMessage: 'Logging you in...',
}

storiesOf('molecules/forms/LoginForm', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const formSubmitted = boolean('Form submitted', false, propsTab)
    const action = text('Form Action', defaults.action, propsTab)
    const titleText = text('Form Title', defaults.titleText, propsTab)
    const usernameText = text('Username', defaults.usernameText, propsTab)
    const pwdText = text('Password', defaults.pwdText, propsTab)
    const buttonText = text('Submit Button', defaults.buttonText, propsTab)
    const forgotPwdText = text(
      'Password Button',
      defaults.forgotPwdText,
      propsTab
    )
    const submitMessage = text(
      'Login message',
      defaults.submitMessage,
      propsTab
    )
    return (
      <LoginForm
        action={action}
        titleText={titleText}
        usernameText={usernameText}
        pwdText={pwdText}
        buttonText={buttonText}
        forgotPwdText={forgotPwdText}
        submitMessage={formSubmitted ? submitMessage : null}
      />
    )
  })
