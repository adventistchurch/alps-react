import React from 'react'
import PropTypes from 'prop-types'

import { fontSizes, fontTypes } from '../../../atoms/global/fonts'

import Element from '../../../helpers/Element'

function OptionGroup({
  children,
  className,
  title,
  titleFontSize,
  titleFontType,
  ...props
}) {
  return (
    <Element className={className} {...props}>
      {title && (
        <Element fontSize={titleFontSize} fontType={titleFontType}>
          {title}
        </Element>
      )}
      {children}
    </Element>
  )
}

OptionGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleFontSize: PropTypes.oneOf(fontSizes),
  titleFontType: PropTypes.oneOf(fontTypes),
  type: PropTypes.oneOf(['checkbox', 'radio', 'select']),
  ...Element.propTypes,
}
OptionGroup.defaultProps = {
  spacingSize: 'half',
  titleFontSize: 's',
  titleFontType: 'secondary',
}

export default OptionGroup
