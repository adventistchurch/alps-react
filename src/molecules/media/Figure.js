import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Figcaption from './Figcaption'
import {
  getFigureClasses,
  figureAlignPositions,
  figureSizes,
} from '../../atoms/global/figures'

export default function Figure({ caption, className, children, align, size }) {
  const classes = useMemo(() => getFigureClasses(align, size), [align, size])

  return (
    <figure className={`o-figure ${classes} ${className}`}>
      {children}
      {caption && <Figcaption>{caption}</Figcaption>}
    </figure>
  )
}

Figure.propTypes = {
  caption: PropTypes.string,
  align: PropTypes.oneOf(figureAlignPositions),
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(figureSizes),
}
Figure.defaultProps = {
  className: '',
}
