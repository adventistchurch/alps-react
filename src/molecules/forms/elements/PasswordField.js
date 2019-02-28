import React from 'react'

import BaseTextField from './BaseTextField'

function PasswordField({ ...props }) {
  return <BaseTextField type="password" {...props} />
}

PasswordField.propTypes = {
  ...BaseTextField.propTypes,
}
PasswordField.defaultProps = {}

export default PasswordField
