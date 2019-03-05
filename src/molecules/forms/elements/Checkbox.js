import React from 'react'
import PropTypes from 'prop-types'

import BaseInput from './BaseInput'
import FormLabel from './FormLabel'

function Checkbox({
  checked,
  error,
  id,
  label,
  labelOptional,
  labelClass,
  labelSpacingSize,
  name,
  value,
  ...props
}) {
  return (
    <FormLabel
      className={labelClass}
      error={error}
      htmlFor={id}
      position="bottom"
      text={label}
      textOptional={labelOptional}
      spacingSize={labelSpacingSize}
    >
      <BaseInput
        checked={checked}
        error={error}
        id={id}
        name={name}
        type="checkbox"
        value={value}
        {...props}
      />
    </FormLabel>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  darkMode: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelOptional: PropTypes.string,
  labelClass: PropTypes.string,
  labelSpacingSize: FormLabel.propTypes.spacingSize,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

export default Checkbox
