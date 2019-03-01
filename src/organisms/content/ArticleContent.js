import React from 'react'
import PropTypes from 'prop-types'

const ArticleContent = ({ children, sidebar }) => {
  return (
    <>
      {children}
      <div className="c-sidebar l-grid-item l-grid-item--m--2-col l-grid-item--l--2-col">
        {sidebar}
      </div>
    </>
  )
}

ArticleContent.propTypes = {
  children: PropTypes.node,
  sidebar: PropTypes.node,
}

ArticleContent.defaultProps = {}

export default ArticleContent
