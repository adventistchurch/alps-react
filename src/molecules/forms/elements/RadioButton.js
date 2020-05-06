import React from 'react'
import PropTypes from 'prop-types'

import BaseInput from './BaseInput'
import FormLabel from './FormLabel'

function RadioButton({
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
      error={props.error}
      htmlFor={props.id || props.name}
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
        type="radio"
        value={value}
        {...props}
      />
    </FormLabel>
  )
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
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
RadioButton.defaultProps = {
  labelClass: null,
  labelSpacingSize: null,
}

export default RadioButton
