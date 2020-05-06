import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import { Div } from '../../helpers/Element'
import Form from './elements/Form'
import SubmitMessage from './elements/SubmitMessage'
import TextField from './elements/TextField'
import Title from '../../atoms/texts/Title'

function LoginForm({
  forgotPwdLabel,
  forgotPwdUrl,
  onSubmit,
  passwordLabel,
  submitLabel,
  submitMessage,
  title,
  usernameLabel,
  ...props
}) {
  return (
    <Form spacingSize="half" {...props}>
      <Title
        fontSize="m"
        fontType="secondary"
        text={title}
        themeColor="darker"
      />
      {submitMessage && <SubmitMessage text={submitMessage} />}
      <TextField name="username" placeholder={`${usernameLabel}*`} />
      <TextField
        name="password"
        type="password"
        placeholder={`${passwordLabel}*`}
      />
      <Div flex flexAlign="center">
        <Button text={submitLabel} onSubmit={onSubmit} />
        <Button url={forgotPwdUrl} text={forgotPwdLabel} simple />
      </Div>
    </Form>
  )
}

LoginForm.propTypes = {
  forgotPwdLabel: PropTypes.string,
  forgotPwdUrl: PropTypes.string,
  onSubmit: PropTypes.func,
  passwordLabel: PropTypes.string,
  submitLabel: PropTypes.string,
  submitMessage: PropTypes.string,
  title: PropTypes.string,
  usernameLabel: PropTypes.string,
}
LoginForm.defaultProps = {
  forgotPwdLabel: 'Forgot Password?',
  passwordLabel: 'Password',
  submitLabel: 'Login',
  submitMessage: 'Logging you in...',
  title: 'Login',
  usernameLabel: 'Username',
}

export default LoginForm
