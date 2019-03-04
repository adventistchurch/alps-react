import React from 'react'
import PropTypes from 'prop-types'

import { spacingSizes } from '../../../atoms/global/spacing'
import { fontSizes, fontTypes } from '../../../atoms/global/fonts'

import FormLabel from './FormLabel'

function Dropdown({
  defaultValue,
  error,
  id,
  label,
  labelOptional,
  labelFontSize,
  labelFontType,
  labelWrapperClass,
  labelWrapperSpacingSize,
  name,
  options,
}) {
  const Dropdown = (
    <select defaultValue={defaultValue} id={id} name={name}>
      {options.map(({ text, value }, key) => (
        <option key={key} value={value}>
          {text}
        </option>
      ))}
    </select>
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
      {Dropdown}
    </FormLabel>
  ) : (
    <>{Dropdown}</>
  )
}

const valueTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
])

Dropdown.propTypes = {
  defaultValue: valueTypes,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelOptional: PropTypes.string,
  labelFontSize: PropTypes.oneOf(fontSizes),
  labelFontType: PropTypes.oneOf(fontTypes),
  labelWrapperClass: PropTypes.string,
  labelWrapperSpacingSize: PropTypes.oneOf(spacingSizes),
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      value: valueTypes.isRequired,
    })
  ),
}
Dropdown.defaultProps = {
  options: [],
}

export default Dropdown
