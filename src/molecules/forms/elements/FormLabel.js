import React from 'react'
import PropTypes from 'prop-types'

import { sizes } from '../../../atoms/global/spacing'
import { fontSizes, fontTypes } from '../../../atoms/global/fonts'

import Element from '../../../helpers/Element'
import ErrorMessage from './ErrorMessage'

function FormLabel({
  children: FormField,
  error,
  fontSize,
  fontType,
  htmlFor,
  position,
  text,
  textOptional,
  wrapperClass,
  wrapperSpacingSize,
}) {
  const Label = (
    <Element
      as="label"
      fontSize={fontSize}
      fontType={fontType}
      htmlFor={htmlFor}
    >
      {text}{' '}
      {textOptional && (
        <span className="type-alpha--s text-color--gray">({textOptional})</span>
      )}
    </Element>
  )

  return (
    <Element className={wrapperClass} spacingSize={wrapperSpacingSize}>
      {position == 'top' ? (
        <>
          {Label}
          {FormField}
          {error && <ErrorMessage text={error} />}
        </>
      ) : (
        <>
          {FormField}
          {Label}
          {error && <ErrorMessage text={error} />}
        </>
      )}
    </Element>
  )
}

FormLabel.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  fontSize: PropTypes.oneOf(fontSizes),
  fontType: PropTypes.oneOf(fontTypes),
  htmlFor: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom']),
  text: PropTypes.string,
  textOptional: PropTypes.string,
  wrapperClass: PropTypes.string,
  wrapperSpacingSize: PropTypes.oneOf(sizes),
}
FormLabel.defaultProps = {
  fontSize: 's',
  fontType: 'secondary',
  position: 'top',
  wrapperClass: 'c-form-group',
  wrapperSpacingSize: 'quarter',
}

export default FormLabel
