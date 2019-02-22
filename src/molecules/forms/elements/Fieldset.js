import React from 'react'
import PropTypes from 'prop-types'

function Fieldset({ children, className, legendClass, spacing, legend }) {
  const fieldsetClass = `${spacing ? `u-spacing--${spacing}` : ''} ${className}`
  return (
    <fieldset className={fieldsetClass}>
      <legend className={legendClass}>{legend}</legend>
      {children}
    </fieldset>
  )
}

Fieldset.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  legend: PropTypes.string.isRequired,
  legendClass: PropTypes.string,
  spacing: PropTypes.oneOf(['half']),
}
Fieldset.defaultProps = {
  className: '',
  legendClass: '',
}

export default Fieldset
