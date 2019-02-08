import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({
  action,
  method,
  buttonText,
  forgotPwdText,
  submitMessage,
  pwdText,
  titleText,
  usernameText,
}) => {
  return (
    <form className="u-spacing--half" action={action} method={method}>
      <h2 className="u-font--secondary--m u-theme--color--darker">
        {titleText}
      </h2>
      {submitMessage && (
        <div className="messaging u-padding u-color--white u-theme--background-color--darker">
          <span className="u-font--secondary--s">{submitMessage}</span>
        </div>
      )}
      <input type="text" name="name" placeholder={`${usernameText}*`} />
      <input type="password" name="name" placeholder={`${pwdText}*`} />
      <div className="u-flex u-flex--align-center">
        <input type="submit" value={buttonText} />
        <a className="o-button o-button--simple" href="">
          {forgotPwdText}
        </a>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['post', 'get']),
  titleText: PropTypes.string,
  usernameText: PropTypes.string,
  pwdText: PropTypes.string,
  buttonText: PropTypes.string,
  submitMessage: PropTypes.string,
  forgotPwdText: PropTypes.string,
}

LoginForm.defaultProps = {
  titleText: 'Login',
  usernameText: 'Username',
  pwdText: 'Password',
  buttonText: 'Login',
  forgotPwdText: 'Forgot Password?',
  submitMessage: 'Logging you in...',
  method: 'post',
}

export default LoginForm
