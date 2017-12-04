import React from 'react'
import PropTypes from 'prop-types'

import ArticleMeta from '../../molecules/components/ArticleMeta'
import ShareTools from '../../molecules/components/ShareTools'

const ArticleHeader = ({ heading, subheading, meta }) => (
  <header className="article__header article__flow spacing--quarter">
    <h1 className="font--secondary--xl theme--secondary-text-color">
      {heading}
    </h1>
    <div className="spacing--half">
      {subheading && <h1 className="font--secondary--m">{subheading}</h1>}
      <ShareTools />
    </div>
    <ArticleMeta {...meta} />
  </header>
)

ArticleHeader.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  meta: PropTypes.object,
}

ArticleHeader.defaultProps = {
  className: '',
}

export default ArticleHeader
