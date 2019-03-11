import React from 'react'
import PropTypes from 'prop-types'

import { themeColors } from '../../../atoms/global/colors'
import { fontSizes, fontTypes } from '../../../atoms/global/fonts'
import Element from '../../../helpers/Element'

function Fieldset({
  children,
  legend,
  legendClass,
  legendFontSize,
  legendFontType,
  legendThemeColor,
  legendVishidden,
  ...props
}) {
  return (
    <Element as="fieldset" {...props}>
      {legend && (
        <Element
          as="legend"
          className={legendClass}
          fontSize={legendFontSize}
          fontType={legendFontType}
          themeColor={legendThemeColor}
          vishidden={legendVishidden}
        >
          {legend}
        </Element>
      )}
      {children}
    </Element>
  )
}

Fieldset.propTypes = {
  children: PropTypes.node,
  legend: PropTypes.string,
  legendClass: PropTypes.string,
  legendFontSize: PropTypes.oneOf(fontSizes),
  legendFontType: PropTypes.oneOf(fontTypes),
  legendThemeColor: PropTypes.oneOf(themeColors),
  legendVishidden: PropTypes.bool,
  ...Element.propTypes,
}
Fieldset.defaultProps = {
  legendFontSize: 'm',
  legendFontType: 'secondary',
  legendThemeColor: 'darker',
}

export default Fieldset
