import React from 'react'
import PropTypes from 'prop-types'

import BaseInput from './BaseInput'
import FormLabel from './FormLabel'

function Checkbox({
  checked,
  label,
  labelOptional,
  labelClass,
  labelSpacing,
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
      spacing={labelSpacing}
    >
      <BaseInput checked={checked} type="checkbox" {...props} />
    </FormLabel>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelOptional: PropTypes.string,
  labelClass: PropTypes.string,
  labelSpacing: FormLabel.propTypes.spacing,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

export default Checkbox
