import React from 'react'
import PropTypes from 'prop-types'

import useClasses from '../../../helpers/useClasses'
import useInputFocus from '../../../helpers/useInputFocus'

function BaseInput({ checked, error, type, value, hasFocus, ...props }) {
  const inputClass = useClasses('form-input', {
    'has-error': error,
  })
  const inputFocusRef = useInputFocus(hasFocus)

  const isTextArea = type === 'textarea'

  return React.createElement(
    isTextArea ? 'textarea' : 'input',
    {
      className: inputClass,
      defaultChecked: checked,
      defaultValue: value,
      ref: inputFocusRef,
      type,
      ...props,
    },
    isTextArea ? value : null
  )
}

BaseInput.propTypes = {
  checked: PropTypes.bool,
  error: PropTypes.string,
  hasFocus: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'checkbox',
    'email',
    'password',
    'number',
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
