import React from 'react'
import PropTypes from 'prop-types'

import BaseInput from './BaseInput'
import FormLabel from './FormLabel'

function BaseTextField({
  darkMode,
  error,
  id,
  label,
  labelOptional,
  labelClass,
  labelSpacingSize,
  name,
  placeholder,
  type,
  value,
  ...props
}) {
  const InputField = (
    <BaseInput
      type={type}
      {...{ error, id, name, placeholder, value, ...props }}
    />
  )

  return label ? (
    <FormLabel
      className={labelClass}
      error={error}
      htmlFor={id}
      position={darkMode ? 'bottom' : 'top'}
      text={label}
      textOptional={labelOptional}
      spacingSize={labelSpacingSize}
    >
      {InputField}
    </FormLabel>
  ) : (
    <>{InputField}</>
  )
}

BaseTextField.propTypes = {
  darkMode: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelOptional: PropTypes.string,
  labelClass: PropTypes.string,
  labelSpacingSize: FormLabel.propTypes.spacingSize,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['email', 'password', 'search', 'text']),
  value: PropTypes.string,
}
BaseTextField.defaultProps = {
  type: 'text',
}

export default BaseTextField
