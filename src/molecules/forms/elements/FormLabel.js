import React from 'react'
import PropTypes from 'prop-types'

import Element, { Div } from '../../../helpers/Element'
import ErrorMessage from './ErrorMessage'

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
  return (
    <Div className={className} {...props}>
      {position == 'bottom' && field}

      <Element as="label" htmlFor={htmlFor}>
        {text}{' '}
        {textOptional && (
          <span className="type-alpha--s text-color--gray">
            ({textOptional})
          </span>
        )}
      </Element>

      {position == 'top' && field}

      {error && <ErrorMessage text={error} />}
    </Div>
  )
}

FormLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.string,
  htmlFor: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom']),
  text: PropTypes.string,
  textOptional: PropTypes.string,
  ...Element.propTypes,
}
FormLabel.defaultProps = {
  className: 'c-form-group',
  fontSize: 's',
  fontType: 'secondary',
  position: 'top',
  spacingSize: 'quarter',
}

export default FormLabel
