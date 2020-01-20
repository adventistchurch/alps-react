import React from 'react'

import BaseTextField from './BaseTextField'

function SearchField({ ...props }) {
  return <BaseTextField type="search" {...props} />
}

SearchField.propTypes = {
  ...BaseTextField.propTypes,
}

export default SearchField
