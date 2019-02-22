import React from 'react'
import PropTypes from 'prop-types'

function Form({ spacing, children, className, inline, ...props }) {
  const formClass = `${spacing ? `u-spacing--${spacing}` : ''} ${
    inline ? 'c-form--inline' : ''
  } ${className}`
  return (
    <form className={formClass} {...props}>
      {children}
    </form>
  )
}

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
  method: PropTypes.oneOf(['post', 'get']),
  noValidate: PropTypes.bool,
  onSubmit: PropTypes.func,
  role: PropTypes.oneOf(['search']),
  spacing: PropTypes.oneOf(['half']),
}
Form.defaultProps = {
  className: '',
}

export default Form
