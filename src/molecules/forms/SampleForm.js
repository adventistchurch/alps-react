import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from './elements/Checkbox'
import Form from './elements/Form'
import TextArea from './elements/TextArea'
import TextField from './elements/TextField'
import Title from '../../atoms/texts/Title'
import OptionGroup from './elements/OptionGroup'
import RadioButton from './elements/RadioButton'

function SampleForm({ title }) {
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
