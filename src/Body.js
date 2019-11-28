import React from 'react'
import PropTypes from 'prop-types'

import { primaryColors, secondaryColors } from './atoms/global/colors'
import { Div } from './helpers/Element'
import useDrawerContext from './helpers/useDrawerContext'

function Body({ children, hasGrid, primaryColor, secondaryColor }) {
  const { isOpen } = useDrawerContext()

  return (
    <Div className={`u-theme--${primaryColor}`}>
      <Div
        className={`body ${
          secondaryColor ? `u-theme--${secondaryColor}` : ''
        } ${hasGrid ? 'has-grid' : ''} ${isOpen.menu ? 'menu-is-active' : ''} `}
      >
        {children}
      </Div>
    </Div>
  )
}

Body.propTypes = {
  hasGrid: PropTypes.bool,
  children: PropTypes.node,
  primaryColor: PropTypes.oneOf(primaryColors),
  secondaryColor: PropTypes.oneOf(secondaryColors),
}
Body.defaultProps = {
  hasGrid: true,
  primaryColor: 'ming',
  secondaryColor: '',
}
export default Body
