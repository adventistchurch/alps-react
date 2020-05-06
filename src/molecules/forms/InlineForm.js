import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Form from './elements/Form'
import TextField from './elements/TextField'

function InlineForm({ onSubmit, submitLabel, ...props }) {
  return (
    <Form inline noValidate {...props}>
      <TextField aria-required={true} name="text" required />
      <Button text={submitLabel} onSubmit={onSubmit} spaceSide="left" />
    </Form>
  )
}

InlineForm.propTypes = {
  onSubmit: PropTypes.func,
  submitLabel: PropTypes.string,
}

InlineForm.defaultProps = {
  submitLabel: 'Submit',
}

export default InlineForm
