import React from 'react'

import BaseTextField from './BaseTextField'

function TextField({ ...props }) {
  return <BaseTextField type="email" {...props} />
}

TextField.propTypes = {
  ...BaseTextField.propTypes,
}
TextField.defaultProps = {}

export default TextField
