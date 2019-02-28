import React from 'react'
import PropTypes from 'prop-types'

import { sizes } from '../../../atoms/global/spacing'
import { fontSizes, fontTypes } from '../../../atoms/global/fonts'

import BaseInput from './BaseInput'
import FormLabel from './FormLabel'

function BaseTextField({
  darkMode,
  error,
  id,
  label,
  labelOptional,
  labelFontSize,
  labelFontType,
  labelWrapperClass,
  labelWrapperSpacingSize,
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
      error={error}
      fontSize={labelFontSize}
      fontType={labelFontType}
      htmlFor={id}
      position={darkMode ? 'bottom' : 'top'}
      text={label}
      textOptional={labelOptional}
      wrapperClass={labelWrapperClass}
      wrapperSpacingSize={labelWrapperSpacingSize}
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
  labelFontSize: PropTypes.oneOf(fontSizes),
  labelFontType: PropTypes.oneOf(fontTypes),
  labelWrapperClass: PropTypes.string,
  labelWrapperSpacingSize: PropTypes.oneOf(sizes),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['email', 'password', 'search', 'text']),
  value: PropTypes.string,
}
BaseTextField.defaultProps = {
  labelWrapperClass: 'c-form-group',
  type: 'text',
}

export default BaseTextField
