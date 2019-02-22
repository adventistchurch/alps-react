import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import BaseInput from './elements/BaseInput'
import Title from '../../atoms/texts/Title'
import Form from './elements/Form'

function SubscribeForm({
  cancelLabel,
  onCancel,
  onSubmit,
  submitLabel,
  title,
}) {
  return (
    <Form className="c-form c-subscribe-form u-theme--dark u-theme--background-color--darker u-spacing u-padding">
      <Title
        size="l"
        className="u-color--white"
        text={title}
        color={null}
        strong
      />
      <BaseInput
        name="first_name"
        label="First Name"
        placeholder="First Name"
      />
      <BaseInput name="last_name" placeholder="Last Name" label="Last Name" />
      <BaseInput
        name="email"
        type="email"
        placeholder="Email Address"
        label="Email Address"
      />
      <div className="u-spacing--half">
        <span className="u-font--secondary--s u-theme--color--lighter u-text-transform--upper">
          <strong>Frequency</strong>
        </span>
        <BaseInput
          checked={true}
          id="weekly"
          name="option"
          type="radio"
          value="one"
          label="Weekly Bulletin"
        />
        <BaseInput
          id="seasonal"
          name="option"
          type="radio"
          value="two"
          label="Seasonal Bulletin"
        />
      </div>
      <Button text={submitLabel} onSubmit={onSubmit} outline />
      <Button icon="close" text={cancelLabel} onCancel={onCancel} simple />
    </Form>
  )
}

SubscribeForm.propTypes = {
  cancelLabel: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  submitLabel: PropTypes.string,
  title: PropTypes.string,
}
SubscribeForm.defaultProps = {
  cancelLabel: 'Cancel',
  submitLabel: 'Submit',
  title: 'Subscribe',
}

export default SubscribeForm
