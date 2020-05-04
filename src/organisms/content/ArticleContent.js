import React from 'react'
import PropTypes from 'prop-types'

import { spacingSizes } from '../../atoms/global/spacing'
import { Div } from '../../helpers/Element'

import Text from '../../atoms/texts/Text'
import GridSeven from '../../atoms/grids/GridSeven'
import GridItem from '../../atoms/grids/GridItem'

function ArticleContent({ children, sidebar, hasDropcap, spacingSize }) {
  return (
    <GridSeven
      as="section"
      gridWrap="6"
      noWrapClass
      shiftSide="left"
      shiftAt="large"
      spacingSize="double"
      spacingUntil="xxlarge"
      paddingSize="zero"
      paddingSide="sides"
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
        <Div
          className="c-sidebar"
          gridItemSizeAtL="2"
          gridItemSizeAtXL="2"
          paddingSize="zero"
          paddingSide="sides"
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
  spacingSize: PropTypes.oneOf(spacingSizes),
}
ArticleContent.defaultProps = {
  hasDropcap: true,
  spacingSize: 'double',
}

export default ArticleContent
