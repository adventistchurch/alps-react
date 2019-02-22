import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Form from './elements/Form'
import Title from '../../atoms/texts/Title'

function LoginForm({
  forgotPwdLabel,
  forgotPwdUrl,
  passwordLabel,
  submitLabel,
  submitMessage,
  title,
  usernameLabel,
  ...props
}) {
  return (
    <Form spacing="half" {...props}>
      <Title color="darker" size="m" type="secondary">
        {title}
      </Title>
      {submitMessage && (
        <div className="messaging u-padding u-color--white u-theme--background-color--darker">
          <span className="u-font--secondary--s">{submitMessage}</span>
        </div>
      )}
      <input type="text" name="name" placeholder={`${usernameLabel}*`} />
      <input type="password" name="name" placeholder={`${passwordLabel}*`} />
      <div className="u-flex u-flex--align-center">
        <input type="submit" value={submitLabel} />
        <Button url={forgotPwdUrl} text={forgotPwdLabel} simple />
      </div>
    </Form>
  )
}

LoginForm.propTypes = {
  forgotPwdLabel: PropTypes.string,
  forgotPwdUrl: PropTypes.string,
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
