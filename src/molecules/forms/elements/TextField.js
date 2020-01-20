import React from 'react'

import BaseTextField from './BaseTextField'

function TextField({ ...props }) {
  return <BaseTextField type="text" {...props} />
}

TextField.propTypes = {
  ...BaseTextField.propTypes,
}

export default TextField
