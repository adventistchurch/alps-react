import React from 'react'
import PropTypes from 'prop-types'

import { fontSizes, fontTypes } from '../../../atoms/global/fonts'

import Container from '../../../helpers/Element'

function OptionGroup({
  children,
  className,
  title,
  titleFontSize,
  titleFontType,
}) {
  return (
    <Container className={className} spacingSize="half">
      {title && (
        <Container fontSize={titleFontSize} fontType={titleFontType}>
          {title}
        </Container>
      )}
      {children}
    </Container>
  )
}

OptionGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleFontSize: PropTypes.oneOf(fontSizes),
  titleFontType: PropTypes.oneOf(fontTypes),
  type: PropTypes.oneOf(['checkbox', 'radio', 'select']),
}
OptionGroup.defaultProps = {
  titleFontSize: 's',
  titleFontType: 'secondary',
}

export default OptionGroup
