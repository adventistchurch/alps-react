import React from 'react'
import PropTypes from 'prop-types'

import Text from '../../atoms/texts/Text'
import GridSeven from '../../atoms/grids/GridSeven'
import GridItem from '../../atoms/grids/GridItem'

function ArticleWrap({ children, ...props }) {
  return (
    <GridSeven
      as="section"
      shiftSide="left"
      shiftAt="xxlarge"
      spacingSize="double"
      spacingUntil="large"
    >
      <GridItem className="c-article" sizeAtL="4" sizeAtXL="3">
        <Text as="article" className="c-article__body" {...props}>
          {children}
        </Text>
      </GridItem>
    </GridSeven>
  )
}

ArticleWrap.propTypes = {
  children: PropTypes.node,
  ...Text.propTypes,
}
ArticleWrap.defaultProps = {}

export default ArticleWrap
