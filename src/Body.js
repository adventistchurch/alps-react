import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { primaryColors, secondaryColors } from './atoms/global/colors'
import { Div } from './helpers/Element'
import useDrawerContext from './helpers/useDrawerContext'

export default function Body({
  children,
  hasBodyClass,
  hasGrid,
  primaryColor,
  secondaryColor,
}) {
  const { isOpen } = useDrawerContext()

  const className = useMemo(() => {
    const classes = []
    if (hasBodyClass) classes.push('body')
    if (hasGrid) classes.push('has-grid')
    if (primaryColor) classes.push(`u-theme--${primaryColor}`)
    if (secondaryColor) classes.push(`u-theme--${secondaryColor}`)
    if (isOpen.menu) classes.push('menu-is-active')
    return classes.join(' ')
  }, [hasBodyClass, hasGrid, primaryColor, secondaryColor, isOpen])

  return <Div className={className}>{children}</Div>
}

Body.propTypes = {
  /**
   * Defines if grid should be displayed
   */
  hasBodyClass: PropTypes.bool,
  /**
   * Defines if grid should be displayed
   */
  hasGrid: PropTypes.bool,
  /**
   * Body's nested elements
   */
  children: PropTypes.node,
  /**
   * Theme main color
   */
  primaryColor: PropTypes.oneOf(primaryColors),
  /**
   * Theme secondary color
   */
  secondaryColor: PropTypes.oneOf(secondaryColors),
}
Body.defaultProps = {
  hasBodyClass: true,
}
