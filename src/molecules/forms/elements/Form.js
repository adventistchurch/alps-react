import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../../atoms/buttons/Button'
import { darkThemeClass } from '../../../atoms/global/colors'
import Title from '../../../atoms/texts/Title'
import { Form as FormElement } from '../../../helpers/Element'
import TextArea from './TextArea'
import TextField from './TextField'
import OptionGroup from './OptionGroup'
import Dropdown from './Dropdown'

const components = {
  title: Title,
  text: TextField,
  checkboxes: OptionGroup,
  'radio-buttons': OptionGroup,
  dropdown: Dropdown,
  textarea: TextArea,
  button: Button,
}

function Form({ children, className, darkMode, fields, inline, ...props }) {
  const classes = ['c-form']
  if (inline) classes.push('c-form--inline')
  if (darkMode) classes.push(darkThemeClass)
  if (className) classes.push(className)
  const formClass = classes.join(' ')

  return (
    <FormElement
      className={formClass}
      themeBackground={darkMode ? 'darker' : null}
      {...props}
    >
      {fields.map(({ type, ...fieldProps }, key) => {
        const optionGroupProps =
          type == 'checkboxes'
            ? { type: 'checkbox' }
            : type == 'radio-buttons'
            ? { type: 'radio' }
            : {}

        return React.createElement(components[type], {
          ...optionGroupProps,
          ...fieldProps,
          key,
        })
      })}
      {children}
    </FormElement>
  )
}

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  darkMode: PropTypes.bool,
  fields: PropTypes.array,
  inline: PropTypes.bool,
  method: PropTypes.oneOf(['post', 'get']),
  noValidate: PropTypes.bool,
  onSubmit: PropTypes.func,
  role: PropTypes.oneOf(['search']),
  ...FormElement.propTypes,
}
Form.defaultProps = {
  fields: [],
}

export default Form
