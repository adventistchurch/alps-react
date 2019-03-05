import React from 'react'
import PropTypes from 'prop-types'

import { primaryColors, secondaryColors } from './atoms/global/colors'
import useDrawerContext from './helpers/useDrawerContext'

function Body({ children, hasGrid, primaryColor, secondaryColor, style }) {
  const { isOpen } = useDrawerContext()

  const classes = ['body']

  if (secondaryColor) classes.push(`u-theme--${secondaryColor}`)
  if (hasGrid) classes.push('has-grid')
  if (isOpen.menu) classes.push('menu-is-active')

  return (
    <div className={`u-theme--${primaryColor}`} style={style}>
      <div className={classes.join(' ')}>{children}</div>
    </div>
  )
}
Body.propTypes = {
  hasGrid: PropTypes.bool,
  children: PropTypes.node,
  primaryColor: PropTypes.oneOf(primaryColors),
  secondaryColor: PropTypes.oneOf(secondaryColors),
  style: PropTypes.object,
}
Body.defaultProps = {
  hasGrid: true,
  primaryColor: 'ming',
  secondaryColor: '',
}
export default Body
