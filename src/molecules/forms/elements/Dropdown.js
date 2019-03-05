import React from 'react'
import PropTypes from 'prop-types'

import FormLabel from './FormLabel'

function Dropdown({
  defaultValue,
  error,
  id,
  label,
  labelOptional,
  labelClass,
  labelSpacingSize,
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
      className={labelClass}
      error={error}
      htmlFor={id}
      text={label}
      textOptional={labelOptional}
      spacingSize={labelSpacingSize}
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
  labelClass: PropTypes.string,
  labelSpacingSize: FormLabel.propTypes.spacingSize,
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
