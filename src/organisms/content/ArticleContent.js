import React from 'react'
import PropTypes from 'prop-types'

import { spacingSizes } from '../../atoms/global/spacing'
import { Div } from '../../helpers/Element'
import ArticleWrap from './ArticleWrap'

function ArticleContent({
  children,
  sidebar,
  hasDropcap,
  spacingSize,
  ...others
}) {
  return (
    <>
      <ArticleWrap
        hasDropcap={hasDropcap}
        spacingSize={spacingSize}
        {...others}
      >
        {children}
      </ArticleWrap>

      <Div
        className="c-sidebar"
        gridItemSizeAtL="2"
        gridItemSizeAtXL="2"
        paddingSize="zero"
        paddingSide="sides"
      >
        {sidebar}
      </Div>
    </>
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
