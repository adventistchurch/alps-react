import React from 'react'
import PropTypes from 'prop-types'

function BaseInput({
  checked,
  error,
  id,
  inline,
  name,
  placeholder,
  type,
  value,
  ...props
}) {
  const classes = []
  if (error) classes.push('has-error')
  if (inline) classes.push('form-input')
  const inputClass = classes.length > 0 ? classes.join(' ') : null

  return (
    <input
      className={inputClass}
      defaultChecked={checked}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      {...props}
    />
  )
}

BaseInput.propTypes = {
  checked: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  inline: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'checkbox',
    'email',
    'password',
    'radio',
    'search',
    'text',
  ]),
  value: PropTypes.string,
}
BaseInput.defaultProps = {
  type: 'text',
}

export default BaseInput
