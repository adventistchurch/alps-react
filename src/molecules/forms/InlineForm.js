import React from 'react'
import PropTypes from 'prop-types'

import Form from './Form'

function InlineForm({ submitLabel, ...props }) {
  return (
    <Form inline noValidate {...props}>
      <input
        type="text"
        name="text"
        aria-required="true"
        required
        className="form-input"
      />
      <p className="u-space--left">
        <input
          name="submit"
          type="submit"
          className="submit"
          value={submitLabel}
        />
      </p>
    </Form>
  )
}

InlineForm.propTypes = {
  submitLabel: PropTypes.string,
}

InlineForm.defaultProps = {
  submitLabel: 'Submit',
}

export default InlineForm
