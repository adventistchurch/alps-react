import React from 'react'
import PropTypes from 'prop-types'

import { spacingSizes } from '../../atoms/global/spacing'

import Text from '../../atoms/texts/Text'
import GridSeven from '../../atoms/grids/GridSeven'
import GridItem from '../../atoms/grids/GridItem'

function ArticleContentShort({ children, sidebar, hasDropcap, spacingSize }) {
  return (
    <GridSeven
      as="section"
      gridWrap="6"
      noWrapClass
      shiftSide="left"
      shiftAt="xxlarge"
      spacingSize="double"
      spacingUntil="large"
    >
      <GridItem className="c-article" sizeAtL="4" sizeAtXL="3">
        <Text
          as="article"
          className="c-article__body"
          hasDropcap={hasDropcap}
          spacingSize={spacingSize}
        >
          {children}
        </Text>
      </GridItem>

      {sidebar && (
        <GridItem
          className="c-sidebar"
          sizeAtL="2"
          sizeAtXL="2"
          paddingSize="zero"
          paddingSide="sides"
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
  spacingSize: PropTypes.oneOf(spacingSizes),
}
ArticleContentShort.defaultProps = {
  hasDropcap: false,
  spacingSize: 'double',
}

export default ArticleContentShort
