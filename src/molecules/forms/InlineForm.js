import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Form from './elements/Form'
import TextField from './elements/TextField'

export default function InlineForm({ onSubmit, submitLabel, ...props }) {
  return (
    <Form inline noValidate {...props}>
      <TextField aria-required={true} name="text" required />
      <Button text={submitLabel} onSubmit={onSubmit} spaceLeft />
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
