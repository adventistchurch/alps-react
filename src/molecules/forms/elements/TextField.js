import React from 'react'
import PropTypes from 'prop-types'

import BaseInput from './BaseInput'
import FormLabel from './FormLabel'
import useFormContext from './FormContext'

function TextField({
  label,
  labelOptional,
  labelClass,
  labelSpacing,
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
      spacing={labelSpacing}
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
  labelSpacing: FormLabel.propTypes.spacing,
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
