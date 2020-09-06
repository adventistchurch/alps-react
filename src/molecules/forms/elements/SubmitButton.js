import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../../atoms/buttons/Button'

export default function SubmitButton({ label, ...props }) {
  return <Button text={label} {...props} />
}

SubmitButton.propTypes = {
  label: PropTypes.string,
  ...Button.propTypes,
}
SubmitButton.defaultProps = {
  label: 'Submit',
}
