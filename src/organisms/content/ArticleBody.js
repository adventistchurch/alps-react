import React from 'react'
import PropTypes from 'prop-types'

import Text from '../../atoms/texts/Text'
import Grid from '../../atoms/grids/Grid'
import GridItem from '../../atoms/grids/GridItem'

function ArticleBody({ children, ...props }) {
  return (
    <Grid
      as="section"
      seven
      shiftSide="left"
      shiftAt="xxlarge"
      spacing="double"
      spacingUntil="large"
    >
      <GridItem className="c-article" sizeAtL="4" sizeAtXL="3">
        <Text as="article" className="c-article__body" {...props}>
          {children}
        </Text>
      </GridItem>
    </Grid>
  )
}

ArticleBody.propTypes = {
  children: PropTypes.node,
  ...Text.propTypes,
}
ArticleBody.defaultProps = {}

export default ArticleBody
