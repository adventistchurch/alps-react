import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import Button from '../../../atoms/buttons/Button'
import { darkThemeClass } from '../../../atoms/global/colors'
import Title from '../../../atoms/texts/Title'
import { Form as FormElement } from '../../../helpers/Element'
import useClasses from '../../../helpers/useClasses'
import { FormContextProvider } from './FormContext'
import TextField from './TextField'
import OptionGroup from './OptionGroup'
import SubmitButton from './SubmitButton'
import Dropdown from './Dropdown'

const components = {
  title: { component: Title },
  text: { component: TextField, getType: type => type },
  'checkbox-group': { component: OptionGroup, getType: () => 'checkbox' },
  'radio-group': { component: OptionGroup, getType: () => 'radio' },
  select: { component: Dropdown },
  button: { component: Button },
  submit: { component: SubmitButton },
}

function useFormFields(fields, children) {
  if (children) return children

  return fields.map(({ type, name, id, ...fieldProps }, key) => {
    const { component, getType } = components[type] || components['text']

    return React.createElement(component, {
      name,
      id: id || name,
      type: getType ? getType(type) : undefined,
      ...fieldProps,
      key,
    })
  })
}

function Form({
  children,
  className,
  darkMode,
  fields,
  inline,
  labelPosition,
  onSubmit,
  title,
  ...props
}) {
  const formClass = useClasses('c-form', {
    'c-form--inline': inline,
    [darkThemeClass]: darkMode,
    [className]: className,
  })

  const formFields = useFormFields(fields, children)

  const _onSubmit = useCallback(
    e => {
      if (typeof onSubmit === 'function') {
        e.preventDefault()
        onSubmit(e)
      }
    },
    [onSubmit]
  )

  return (
    <FormContextProvider darkMode={darkMode} labelPosition={labelPosition}>
      <FormElement
        className={formClass}
        themeBackground={darkMode ? 'darker' : null}
        onSubmit={_onSubmit}
        {...props}
      >
        {title ? (
          typeof title === 'string' ? (
            <Title
              color={darkMode ? 'white' : null}
              fontSize="l"
              strong
              text={title}
              themeColor={darkMode ? null : 'darker'}
            />
          ) : (
            title
          )
        ) : null}

        {formFields}
      </FormElement>
    </FormContextProvider>
  )
}

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  darkMode: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['top', 'bottom']),
  fields: PropTypes.array,
  inline: PropTypes.bool,
  method: PropTypes.oneOf(['post', 'get']),
  noValidate: PropTypes.bool,
  onSubmit: PropTypes.func,
  role: PropTypes.oneOf(['search']),
  title: PropTypes.node,
  ...FormElement.propTypes,
}
Form.defaultProps = {
  fields: [],
}

export default Form
