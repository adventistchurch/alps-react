import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Form from './elements/Form'
import OptionGroup from './elements/OptionGroup'
import RadioButton from './elements/RadioButton'
import TextField from './elements/TextField'

function SubscribeForm({
  cancelLabel,
  darkMode,
  onCancel,
  onSubmit,
  submitLabel,
  title,
}) {
  return (
    <Form title={title} darkMode={darkMode} labelPosition="top" padding spacing>
      <TextField
        label="First Name"
        name="first_name"
        placeholder="First Name"
      />
      <TextField label="Last Name" name="last_name" placeholder="Last Name" />
      <TextField
        type="email"
        label="Email Address"
        name="email"
        placeholder="Email Address"
      />
      <TextField
        type="textarea"
        label="Comments"
        name="comments"
        placeholder="Place some comments here"
        labelOptional="Optional"
      />
      <OptionGroup title="Frequency">
        <RadioButton
          checked={true}
          id="weekly"
          label="Weekly Bulletin"
          name="frequency"
          value="weekly"
        />
        <RadioButton
          id="seasonal"
          label="Seasonal Bulletin"
          name="frequency"
          value="seasonal"
        />
      </OptionGroup>
      <Button text={submitLabel} onSubmit={onSubmit} outline />
      <Button icon="close" text={cancelLabel} onCancel={onCancel} simple />
    </Form>
  )
}

SubscribeForm.propTypes = {
  cancelLabel: PropTypes.string,
  darkMode: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  submitLabel: PropTypes.string,
  title: PropTypes.string,
}
SubscribeForm.defaultProps = {
  cancelLabel: 'Cancel',
  darkMode: true,
  submitLabel: 'Submit',
  title: 'Subscribe',
}

export default SubscribeForm
