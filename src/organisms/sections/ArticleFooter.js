import React from 'react'
import PropTypes from 'prop-types'

function ArticleFooter({ children }) {
  return (
    <footer className="c-article__footer u-padding--left">{children}</footer>
  )
}

ArticleFooter.propTypes = {
  children: PropTypes.node,
}

export default ArticleFooter
