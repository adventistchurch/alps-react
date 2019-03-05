import React from 'react'
import PropTypes from 'prop-types'

import FormLabel from './FormLabel'

function TextArea({
  children,
  error,
  id,
  label,
  labelOptional,
  labelClass,
  labelSpacingSize,
  value,
  ...props
}) {
  const TextArea = (
    <textarea className={error ? 'has-error' : null} id={id} {...props}>
      {children ? children : value}
    </textarea>
  )

  return label ? (
    <FormLabel
      className={labelClass}
      error={error}
      htmlFor={id}
      text={label}
      textOptional={labelOptional}
      spacingSize={labelSpacingSize}
    >
      {TextArea}
    </FormLabel>
  ) : (
    <>{TextArea}</>
  )
}

TextArea.propTypes = {
  children: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelOptional: PropTypes.string,
  labelClass: PropTypes.string,
  labelSpacingSize: FormLabel.propTypes.spacingSize,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string,
}
TextArea.defaultProps = {
  rows: 8,
}

export default TextArea
