import React from 'react'
import PropTypes from 'prop-types'

import { sizes } from '../../../atoms/global/spacing'
import { fontSizes, fontTypes } from '../../../atoms/global/fonts'

import BaseInput from './BaseInput'
import FormLabel from './FormLabel'

function BaseTextField({
  checked,
  error,
  id,
  label,
  labelOptional,
  labelFontSize,
  labelFontType,
  labelWrapperClass,
  labelWrapperSpacingSize,
  name,
  value,
  ...props
}) {
  const Checkbox = (
    <BaseInput
      type="checkbox"
      {...{ checked, error, id, name, value, ...props }}
    />
  )

  return label ? (
    <FormLabel
      error={error}
      fontSize={labelFontSize}
      fontType={labelFontType}
      htmlFor={id}
      position="bottom"
      text={label}
      textOptional={labelOptional}
      wrapperClass={labelWrapperClass}
      wrapperSpacingSize={labelWrapperSpacingSize}
    >
      {Checkbox}
    </FormLabel>
  ) : (
    { Checkbox }
  )
}

BaseTextField.propTypes = {
  checked: PropTypes.bool,
  darkMode: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelOptional: PropTypes.string,
  labelFontSize: PropTypes.oneOf(fontSizes),
  labelFontType: PropTypes.oneOf(fontTypes),
  labelWrapperClass: PropTypes.string,
  labelWrapperSpacingSize: PropTypes.oneOf(sizes),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}
BaseTextField.defaultProps = {
  labelWrapperClass: 'inline-form-element--row',
  labelWrapperSpacingSize: null,
}

export default BaseTextField
