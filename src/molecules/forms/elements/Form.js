import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../../helpers/Element'
import { darkThemeClass } from '../../../atoms/global/colors'

function Form({ children, className, darkMode, inline, ...props }) {
  const classes = []

  classes.push('c-form')
  if (inline) classes.push('c-form--inline')
  if (darkMode) classes.push(darkThemeClass)
  if (className) classes.push(className)

  const formClass = classes.join(' ')

  return (
    <Element
      as="form"
      className={formClass}
      themeBackground={darkMode ? 'darker' : null}
      {...props}
    >
      {children}
    </Element>
  )
}

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  darkMode: PropTypes.bool,
  inline: PropTypes.bool,
  method: PropTypes.oneOf(['post', 'get']),
  noValidate: PropTypes.bool,
  onSubmit: PropTypes.func,
  role: PropTypes.oneOf(['search']),
  ...Element.propTypes,
}
Form.defaultProps = {}

export default Form
