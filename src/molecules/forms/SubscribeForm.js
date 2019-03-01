import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import EmailField from './elements/EmailField'
import Form from './elements/Form'
import FormTitle from './elements/FormTitle'
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
    <Form darkMode={darkMode} padding spacing>
      <FormTitle text={title} darkMode={darkMode} />
      <TextField
        darkMode={darkMode}
        label="First Name"
        name="first_name"
        placeholder="First Name"
      />
      <TextField
        darkMode={darkMode}
        label="Last Name"
        name="last_name"
        placeholder="Last Name"
      />
      <EmailField
        darkMode={darkMode}
        label="Email Address"
        name="email"
        placeholder="Email Address"
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
