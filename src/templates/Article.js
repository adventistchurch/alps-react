import React from 'react'
import PropTypes from 'prop-types'

import PageContent from '../organisms/content/PageContent'
import ArticleContent from '../organisms/content/ArticleContent'
import PageHeaderFeature from '../organisms/sections/PageHeaderFeature'
import RelatedPosts from '../organisms/asides/RelatedPosts'
import Main from './Main'
import TemplateWrap from './TemplateWrap'

function Article({
  asBackgroundImage,
  breadcrumbs,
  children,
  category,
  content,
  description,
  date,
  image,
  kicker,
  relatedTitle,
  relatedPosts,
  title,
  ...templateProps
}) {
  return (
    <TemplateWrap {...templateProps}>
      <Main>
        <PageHeaderFeature
          asBackgroundImage={asBackgroundImage}
          kicker={kicker}
          title={title}
          description={description}
          date={date}
          category={category}
          image={image}
        />
        <ArticleContent
          breadcrumbs={breadcrumbs}
          sidebar={
            relatedPosts &&
            relatedPosts.length > 0 && (
              <RelatedPosts heading={relatedTitle} blocks={relatedPosts} />
            )
          }
        >
          {content || children}
        </ArticleContent>
      </Main>
    </TemplateWrap>
  )
}

Article.propTypes = {
  asBackgroundImage: PropTypes.bool,
  breadcrumbs: PageContent.propTypes.breadcrumbs,
  category: PropTypes.node,
  children: PropTypes.node,
  content: PropTypes.node,
  description: PropTypes.node,
  date: PropTypes.node,
  image: PropTypes.object,
  kicker: PropTypes.node,
  relatedTitle: PropTypes.string,
  relatedPosts: PropTypes.array,
  title: PropTypes.node,
}
Article.defaultProps = {
  asBackgroundImage: true,
  breadcrumbs: [],
}

export default Article
