import React from 'react'
import PropTypes from 'prop-types'

import Element, { Div, Span } from '../../../helpers/Element'
import ErrorMessage from './ErrorMessage'
import useFormContext from './FormContext'

function FormLabel({
  children: field,
  error,
  htmlFor,
  position,
  text,
  textOptional,
  className,
  ...props
}) {
  const { darkMode } = useFormContext()

  const fieldInTop = darkMode || position === 'bottom'

  if (!text) return field
  return (
    <Div className={className} {...props}>
      {fieldInTop && field}

      <Element as="label" htmlFor={htmlFor} fontType="secondary" fontSize="s">
        {text}{' '}
        {textOptional && (
          <Span fontType="secondary" fontSize="xs" themeColor="lighter">
            {textOptional}
          </Span>
        )}
      </Element>

      {!fieldInTop && field}

      {error && <ErrorMessage text={error} />}
    </Div>
  )
}

FormLabel.propTypes = {
  ...Div.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.string,
  htmlFor: PropTypes.string,
  text: PropTypes.string,
  textOptional: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom']),
}
FormLabel.defaultProps = {
  className: 'c-form-group',
  position: 'top',
  spacingSize: 'quarter',
}

export default FormLabel
