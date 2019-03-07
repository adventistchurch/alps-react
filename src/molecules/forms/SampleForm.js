import React from 'react'
import PropTypes from 'prop-types'

import Form from './elements/Form'

function SampleForm({
  cancelLabel, // eslint-disable-line no-unused-vars
  children,
  submitLabel, // eslint-disable-line no-unused-vars
  ...props
}) {
  return (
    <Form padding spacing {...props}>
      {children}
    </Form>
  )
}

SampleForm.propTypes = {
  cancelLabel: PropTypes.string,
  children: PropTypes.node,
  submitLabel: PropTypes.string,
  ...Form.propTypes,
}
SampleForm.defaultProps = {
  cancelLabel: 'Cancel',
  submitLabel: 'Submit',
  ...Form.defaultProps,
}

export default SampleForm
