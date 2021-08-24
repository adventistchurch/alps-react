import React from 'react'
import PropTypes from 'prop-types'

import { spacingSizes } from '../../atoms/global/spacing'
import { Div } from '../../helpers/Element'

import GridSeven from '../../atoms/grids/GridSeven'
import GridItem from '../../atoms/grids/GridItem'

export default function SearchContent({ children, sidebar, spacing }) {
  return (
    <GridSeven
      as="section"
      gridWrap="6"
      noWrapClass
      shiftLeftAt="large"
      spacingDoubleUntil="large"
      paddingSides="zero"
    >
      <GridItem className="c-article" sizeAtL="3" sizeAtXL="3" as="article">
        <Div className="c-article__body" spacing={spacing}>
          {children}
        </Div>
      </GridItem>

      {sidebar && (
        <Div
          className="c-sidebar"
          gridItemSizeAtL="2"
          gridItemSizeAtXL="2"
          paddingSides="zero"
        >
          {sidebar}
        </Div>
      )}
    </GridSeven>
  )
}

SearchContent.propTypes = {
  children: PropTypes.node,
  sidebar: PropTypes.node,
  hasDropcap: PropTypes.bool,
  spacing: PropTypes.oneOf(spacingSizes),
}
SearchContent.defaultProps = {
  hasDropcap: true,
  spacing: 'double',
}
