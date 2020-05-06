import React from 'react'
import PropTypes from 'prop-types'

import FormLabel from './FormLabel'

function Dropdown({
  allowNone,
  defaultValue,
  error,
  hideNone,
  id,
  label,
  labelOptional,
  labelClass,
  labelSpacingSize,
  name,
  noneLabel,
  noneValue,
  options,
  ...props
}) {
  return (
    <FormLabel
      className={labelClass}
      error={error}
      htmlFor={id || name}
      text={label}
      textOptional={labelOptional}
      spacingSize={labelSpacingSize}
    >
      <select defaultValue={defaultValue} id={id} name={name} {...props}>
        {!hideNone && (
          <option
            key={`${name}-option-none`}
            value={noneValue}
            disabled={!allowNone}
          >
            {noneLabel}
          </option>
        )}
        {options.map(({ text, value }, key) => (
          <option key={`${name}-option-${key}`} value={value}>
            {text}
          </option>
        ))}
      </select>
    </FormLabel>
  )
}

const valueTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
])

Dropdown.propTypes = {
  allowNone: PropTypes.bool,
  defaultValue: valueTypes,
  error: PropTypes.string,
  hideNone: PropTypes.bool,
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
  noneLabel: PropTypes.node,
  noneValue: PropTypes.any,
}
Dropdown.defaultProps = {
  allowNone: true,
  noneLabel: '-',
  options: [],
}

export default Dropdown
