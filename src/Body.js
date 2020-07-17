import React from 'react'
import PropTypes from 'prop-types'

import { primaryColors, secondaryColors } from './atoms/global/colors'
import { Div } from './helpers/Element'
import useDrawerContext from './helpers/useDrawerContext'

export function ThemeWrap({
  children,
  className = '',
  color,
  hasGrid = false,
}) {
  return (
    <Div
      className={`${color ? `u-theme--${color}` : ''} ${
        hasGrid ? 'has-grid' : ''
      } ${className}`}
    >
      {children}
    </Div>
  )
}
ThemeWrap.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  hasGrid: PropTypes.bool,
}

export default function Body({
  children,
  hasGrid,
  primaryColor,
  secondaryColor,
}) {
  const { isOpen } = useDrawerContext()

  return (
    <ThemeWrap color={primaryColor}>
      <ThemeWrap
        color={secondaryColor}
        hasGrid={hasGrid}
        className={`body ${isOpen.menu ? 'menu-is-active' : ''} `}
      >
        {children}
      </ThemeWrap>
    </ThemeWrap>
  )
}

Body.propTypes = {
  hasGrid: PropTypes.bool,
  children: PropTypes.node,
  primaryColor: PropTypes.oneOf(primaryColors),
  secondaryColor: PropTypes.oneOf(secondaryColors),
}
