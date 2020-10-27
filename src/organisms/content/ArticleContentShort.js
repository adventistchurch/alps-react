import React from 'react'
import PropTypes from 'prop-types'

import { spacingSizes } from '../../atoms/global/spacing'

import Text from '../../atoms/texts/Text'
import GridSeven from '../../atoms/grids/GridSeven'
import GridItem from '../../atoms/grids/GridItem'

function ArticleContentShort({ children, sidebar, hasDropcap, spacing }) {
  return (
    <GridSeven
      as="section"
      gridWrap="6"
      noWrapClass
      shiftLeftAt="xxlarge"
      spacingDoubleUntil="large"
    >
      <GridItem className="c-article" sizeAtL="4" sizeAtXL="3">
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
        <GridItem
          className="c-sidebar"
          sizeAtL="2"
          sizeAtXL="2"
          paddingSides="zero"
        >
          {sidebar}
        </GridItem>
      )}
    </GridSeven>
  )
}

ArticleContentShort.propTypes = {
  children: PropTypes.node,
  sidebar: PropTypes.node,
  hasDropcap: PropTypes.bool,
  spacing: PropTypes.oneOf(spacingSizes),
}
ArticleContentShort.defaultProps = {
  hasDropcap: false,
  spacing: 'double',
}

export default ArticleContentShort
