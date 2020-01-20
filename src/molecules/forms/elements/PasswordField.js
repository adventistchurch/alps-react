import React from 'react'

import BaseTextField from './BaseTextField'

function PasswordField({ ...props }) {
  return <BaseTextField type="password" {...props} />
}

PasswordField.propTypes = {
  ...BaseTextField.propTypes,
}

export default PasswordField
