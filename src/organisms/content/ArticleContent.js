import React from 'react'
import PropTypes from 'prop-types'

import { spacingSizes } from '../../atoms/global/spacing'
import { Div } from '../../helpers/Element'

import Text from '../../atoms/texts/Text'
import GridSeven from '../../atoms/grids/GridSeven'
import GridItem from '../../atoms/grids/GridItem'

function ArticleContent({ children, sidebar, hasDropcap, spacing }) {
  return (
    <GridSeven
      as="section"
      gridWrap="6"
      noWrapClass
      shiftSide="left"
      shiftAt="large"
      spacingDoubleUntil="large"
      paddingSides="zero"
    >
      <GridItem className="c-article" sizeAtL="3" sizeAtXL="3">
        <Text
          as="article"
          className="c-article__body"
          hasDropcap={hasDropcap}
          spacing={spacing}
        >
          {children}
        </Text>
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

ArticleContent.propTypes = {
  children: PropTypes.node,
  sidebar: PropTypes.node,
  hasDropcap: PropTypes.bool,
  spacing: PropTypes.oneOf(spacingSizes),
}
ArticleContent.defaultProps = {
  hasDropcap: true,
  spacing: 'double',
}

export default ArticleContent
