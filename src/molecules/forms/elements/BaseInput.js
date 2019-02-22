import React from 'react'
import PropTypes from 'prop-types'

function BaseInput({ checked, id, label, name, placeholder, type, value }) {
  const inputId = id ? id : name
  const groupClass =
    type == 'radio' ? 'c-form-group__radio' : 'c-form-group u-spacing--quarter'
  return (
    <div className={groupClass}>
      <input
        defaultChecked={checked}
        id={inputId}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <label className="u-font--secondary--s" htmlFor={inputId}>
        {label}
      </label>
    </div>
  )
}

BaseInput.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'radio']),
  value: PropTypes.string,
}
BaseInput.defaultProps = {
  className: '',
  type: 'text',
}

export default BaseInput
