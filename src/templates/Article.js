import React from 'react'
import PropTypes from 'prop-types'

import PageContent from '../organisms/content/PageContent'
import ArticleContent from '../organisms/content/ArticleContent'
import PageHeaderFeature from '../organisms/sections/PageHeaderFeature'
import RelatedPosts from '../organisms/asides/RelatedPosts'
import Main from './Main'
import TemplateWrap from './TemplateWrap'

function Article({
  breadcrumbs,
  children,
  content,
  pageHeader,
  relatedPosts,
  ...templateProps
}) {
  return (
    <TemplateWrap {...templateProps}>
      <Main>
        <PageHeaderFeature {...pageHeader} asBackgroundImage />
        <ArticleContent
          breadcrumbs={breadcrumbs}
          sidebar={<RelatedPosts {...relatedPosts} />}
        >
          {content || children}
        </ArticleContent>
      </Main>
    </TemplateWrap>
  )
}

Article.propTypes = {
  breadcrumbs: PageContent.propTypes.breadcrumbs,
  content: PropTypes.node,
  pageHeader: PropTypes.shape(PageHeaderFeature.propTypes),
  relatedPosts: PropTypes.oneOfType([PropTypes.element]),
  ...TemplateWrap.propTypes,
}
Article.defaultProps = {
  breadcrumbs: [],
}

export default Article
