import React from 'react'
import PropTypes from 'prop-types'

import BaseInput from './BaseInput'
import FormLabel from './FormLabel'
import useFormContext from './FormContext'

function TextField({
  label,
  labelOptional,
  labelClass,
  labelSpacingSize,
  ...props
}) {
  const { labelPosition } = useFormContext()

  return (
    <FormLabel
      className={labelClass}
      error={props.error}
      htmlFor={props.name}
      position={labelPosition}
      text={label}
      textOptional={labelOptional}
      spacingSize={labelSpacingSize}
    >
      <BaseInput {...props} />
    </FormLabel>
  )
}

TextField.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelOptional: PropTypes.string,
  labelClass: PropTypes.string,
  labelSpacingSize: FormLabel.propTypes.spacingSize,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'email',
    'password',
    'search',
    'text',
    'number',
    'checkbox',
  ]),
  value: PropTypes.string,
}
TextField.defaultProps = {
  type: 'text',
}

export default TextField
