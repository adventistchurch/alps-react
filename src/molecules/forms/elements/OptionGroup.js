import React from 'react'
import PropTypes from 'prop-types'

import { fontSizes, fontTypes } from '../../../atoms/global/fonts'

import Checkbox from './Checkbox'
import { Div } from '../../../helpers/Element'
import RadioButton from './RadioButton'

import renderItems from '../../../helpers/renderItems'

const components = {
  checkbox: Checkbox,
  radio: RadioButton,
}

export default function OptionGroup({
  children,
  options,
  title,
  titleFontSize,
  titleFontType,
  type,
  ...props
}) {
  return (
    <Div {...props}>
      {title && (
        <Div fontSize={titleFontSize} fontType={titleFontType}>
          {title}
        </Div>
      )}
      {children ? children : options && renderItems(options, components[type])}
    </Div>
  )
}

OptionGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleFontSize: PropTypes.oneOf(fontSizes),
  titleFontType: PropTypes.oneOf(fontTypes),
  options: PropTypes.array,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  ...Div.propTypes,
}
OptionGroup.defaultProps = {
  options: [],
  spacing: 'half',
  titleFontSize: 's',
  titleFontType: 'secondary',
}
