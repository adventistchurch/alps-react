import React from 'react'
import PropTypes from 'prop-types'

const InlineForm = ({ action, method, buttonText }) => {
  return (
    <form
      action={action}
      method={method}
      className="c-form--inline"
      noValidate=""
    >
      <input
        type="text"
        name="text"
        cols="45"
        rows="8"
        aria-required="true"
        required="required"
        className="form-input"
      />
      <p className="u-space--left form-submit">
        <input
          name="submit"
          type="submit"
          className="submit"
          value={buttonText}
        />
      </p>
    </form>
  )
}

InlineForm.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['post', 'get']),
  buttonText: PropTypes.string,
}

InlineForm.defaultProps = {
  method: 'post',
  buttonText: 'Submit',
}

export default InlineForm
