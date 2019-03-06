import React from 'react'
import PropTypes from 'prop-types'

import { Footer } from '../../helpers/Element'

function ArticleFooter({ children }) {
  return (
    <Footer className="c-article__footer" paddingSide="left">
      {children}
    </Footer>
  )
}

ArticleFooter.propTypes = {
  children: PropTypes.node,
}

export default ArticleFooter
