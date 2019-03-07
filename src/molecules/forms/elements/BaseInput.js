import React from 'react'
import PropTypes from 'prop-types'

import useInputFocus from '../../../helpers/useInputFocus'

function BaseInput({
  checked,
  error,
  id,
  inline,
  name,
  placeholder,
  type,
  value,
  hasFocus,
  ...props
}) {
  const inputFocusRef = useInputFocus(hasFocus)

  const classes = []
  if (error) classes.push('has-error')
  if (inline) classes.push('form-input')
  const inputClass = classes.length > 0 ? classes.join(' ') : null

  return (
    <input
      className={inputClass}
      defaultChecked={checked}
      defaultValue={value}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      ref={inputFocusRef}
      {...props}
    />
  )
}

BaseInput.propTypes = {
  checked: PropTypes.bool,
  error: PropTypes.string,
  hasFocus: PropTypes.bool,
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
