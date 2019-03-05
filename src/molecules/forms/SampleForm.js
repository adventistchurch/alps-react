import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Checkbox from './elements/Checkbox'
import Form from './elements/Form'
import TextArea from './elements/TextArea'
import TextField from './elements/TextField'
import Title from '../../atoms/texts/Title'
import OptionGroup from './elements/OptionGroup'
import RadioButton from './elements/RadioButton'
import Dropdown from './elements/Dropdown'

function SampleForm({ cancelLabel, onCancel, onSubmit, submitLabel, title }) {
  return (
    <Form padding spacing>
      <Title
        fontSize="m"
        fontType="secondary"
        text={title}
        themeColor="darker"
      />
      <TextField id="name" label="Name" name="name" />
      <TextField
        id="optional"
        label="Form"
        labelOptional="Optional"
        name="optional"
      />
      <TextField
        id="error"
        label="Error Label"
        name="error"
        error="This field is required"
      />
      <TextArea
        id="comments"
        label="Your Comments"
        name="comments"
        placeholder="Enter a comment"
      />
      <OptionGroup title="Select many options">
        <Checkbox
          id="checkbox-one"
          label="Option 1"
          name="checkbox-one"
          value="checkbox-one"
        />
        <Checkbox
          id="checkbox-two"
          label="Option 2"
          name="checkbox-two"
          value="checkbox-two"
        />
      </OptionGroup>
      <OptionGroup title="Select one option">
        <RadioButton
          checked={true}
          id="radio-one"
          label="Option 1"
          name="radio"
          value="radio-one"
        />
        <RadioButton
          id="radio-two"
          label="Option 2"
          name="radio"
          value="radio-two"
        />
        <RadioButton
          id="radio-three"
          label="Option 3"
          name="radio"
          value="radio-three"
        />
      </OptionGroup>
      <OptionGroup title="Select from this list:">
        <Dropdown
          id="select"
          name="select"
          label=""
          options={[
            { text: 'Option 1', value: 'one' },
            { text: 'Option 2', value: 'two' },
            { text: 'Option 3', value: 'three' },
            { text: 'Option 4', value: 'four' },
          ]}
        />
      </OptionGroup>
      <Button text={submitLabel} onSubmit={onSubmit} />
      <Button text={cancelLabel} onCancel={onCancel} simple />
    </Form>
  )
}

SampleForm.propTypes = {
  cancelLabel: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  submitLabel: PropTypes.string,
  title: PropTypes.string,
}
SampleForm.defaultProps = {
  cancelLabel: 'Cancel',
  submitLabel: 'Submit',
  title: 'Subscribe',
}

export default SampleForm
