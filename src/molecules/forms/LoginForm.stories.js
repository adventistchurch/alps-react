import React from 'react'

import LoginForm from './LoginForm'

export default {
  title: 'ALPS/Molecules/Forms/LoginForm',
  component: LoginForm,
}

const LoginFormTemplate = props => <LoginForm {...props} />

export const Default = LoginFormTemplate.bind({})
Default.args = {
  submitLabel: 'Login',
  usernameLabel: 'Username',
  passwordLabel: 'Password',
  forgotPwdLabel: 'Forgot Password?',
  forgotPwdUrl: '/forgot-password',
  title: 'Login',
}

export const WithMessage = LoginFormTemplate.bind({})
WithMessage.args = {
  ...Default.args,
  submitMessage: 'Logging you in...',
}
