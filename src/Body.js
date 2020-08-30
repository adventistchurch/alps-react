import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { primaryColors, secondaryColors } from './atoms/global/colors'
import { Div } from './helpers/Element'
import useDrawerContext from './helpers/useDrawerContext'

export default function Body({
  children,
  hasGrid,
  primaryColor,
  secondaryColor,
}) {
  const { isOpen } = useDrawerContext()

  const className = useMemo(() => {
    const classes = ['body']
    if (hasGrid) classes.push('has-grid')
    if (primaryColor) classes.push(`u-theme--${primaryColor}`)
    if (secondaryColor) classes.push(`u-theme--${secondaryColor}`)
    if (isOpen.menu) classes.push('menu-is-active')
    return classes.join(' ')
  }, [hasGrid, primaryColor, secondaryColor, isOpen])

  return <Div className={className}>{children}</Div>
}

Body.propTypes = {
  hasGrid: PropTypes.bool,
  children: PropTypes.node,
  primaryColor: PropTypes.oneOf(primaryColors),
  secondaryColor: PropTypes.oneOf(secondaryColors),
}
