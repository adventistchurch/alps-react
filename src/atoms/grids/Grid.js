import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import { getGridClass } from '../global/grids'

function Grid({ as, children, className, ...props }) {
  const { noGutters, seven, sevenInner, ...rest } = props

  const elementClass = getGridClass({
    noGutters,
    seven,
    sevenInner,
    className,
  })

  return (
    <Element tag={as} className={elementClass} {...rest}>
      {children}
    </Element>
  )
}

export const asOptions = ['aricle', 'div', 'section']

Grid.propTypes = {
  as: PropTypes.oneOf(asOptions),
  children: PropTypes.node,
  className: PropTypes.string,
  noGutters: PropTypes.bool,
  seven: PropTypes.bool,
  sevenInner: PropTypes.bool,
}
Grid.defaultProps = {
  as: 'div',
  className: '',
}

export default Grid
