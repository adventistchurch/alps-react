import React from 'react'
import PropTypes from 'prop-types'

import { spacingSizes } from '../../../atoms/global/spacing'
import { fontSizes, fontTypes } from '../../../atoms/global/fonts'

import FormLabel from './FormLabel'

function TextArea({
  children,
  error,
  id,
  label,
  labelOptional,
  labelFontSize,
  labelFontType,
  labelWrapperClass,
  labelWrapperSpacingSize,
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
      error={error}
      fontSize={labelFontSize}
      fontType={labelFontType}
      htmlFor={id}
      text={label}
      textOptional={labelOptional}
      wrapperClass={labelWrapperClass}
      wrapperSpacingSize={labelWrapperSpacingSize}
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
  labelFontSize: PropTypes.oneOf(fontSizes),
  labelFontType: PropTypes.oneOf(fontTypes),
  labelWrapperClass: PropTypes.string,
  labelWrapperSpacingSize: PropTypes.oneOf(spacingSizes),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string,
}
TextArea.defaultProps = {
  rows: 8,
}

export default TextArea
