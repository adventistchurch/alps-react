import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../helpers/Element'

const ArticleContent = ({ children, sidebar }) => {
  return (
    <>
      {children}
      <Div className="c-sidebar" gridItemSizeAtM="2" gridItemSizeAtL="2">
        {sidebar}
      </Div>
    </>
  )
}

ArticleContent.propTypes = {
  children: PropTypes.node,
  sidebar: PropTypes.node,
}

ArticleContent.defaultProps = {}

export default ArticleContent
