import React from 'react'
import PropTypes from 'prop-types'

function BaseInput({ checked, error, id, name, placeholder, type, value }) {
  return (
    <input
      className={error ? 'has-error' : null}
      defaultChecked={checked}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}

BaseInput.propTypes = {
  checked: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'email', 'password', 'radio', 'text']),
  value: PropTypes.string,
}
BaseInput.defaultProps = {
  type: 'text',
}

export default BaseInput
