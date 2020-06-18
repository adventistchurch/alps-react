import React from 'react'
import PropTypes from 'prop-types'

import GridItem from '../atoms/grids/GridItem'
import GridSeven from '../atoms/grids/GridSeven'
import ContentBlock from '../molecules/blocks/ContentBlock'
import HeadingBlock from '../molecules/blocks/HeadingBlock'
import VideoFigureWithCaption from '../molecules/media/VideoFigureWithCaption'
import PageContent from '../organisms/content/PageContent'
import ArticleContentShort from '../organisms/content/ArticleContentShort'
import BlockFeed from '../organisms/sections/BlockFeed'
import PageHeaderFeature from '../organisms/sections/PageHeaderFeature'
import Main from './Main'
import TemplateWrap from './TemplateWrap'

function ArticleVideo({
  breadcrumbs,
  children,
  caption,
  category,
  content,
  duration,
  durationLabel,
  description,
  date,
  kicker,
  segments,
  segmentsTitle,
  title,
  src,
  ...templateProps
}) {
  return (
    <TemplateWrap {...templateProps}>
      <Main>
        <PageHeaderFeature
          blockType="longform"
          kicker={kicker}
          title={title}
          description={description}
          date={date}
          category={category}
        />
        <GridSeven
          as="section"
          gridWrap="6"
          noWrapClass
          shiftSide="left"
          shiftAt="xxlarge"
          spacingSize="double"
          spacingUntil="large"
          paddingSize="zero"
          paddingSide="sides"
        >
          <GridItem className="c-article" sizeAtL="5" sizeAtXL="4">
            <VideoFigureWithCaption videoSrc={src} caption={caption} />
          </GridItem>
        </GridSeven>
        <ArticleContentShort
          breadcrumbs={breadcrumbs}
          sidebar={
            duration && (
              <ContentBlock description={`${durationLabel}: ${duration}`} />
            )
          }
        >
          {content || children}
        </ArticleContentShort>
        {segments && segments.length > 0 && (
          <>
            <HeadingBlock title={segmentsTitle} />
            <BlockFeed blocks={segments} blocksType="video" grid gridNoWrap />
          </>
        )}
      </Main>
    </TemplateWrap>
  )
}

ArticleVideo.propTypes = {
  breadcrumbs: PageContent.propTypes.breadcrumbs,
  category: PropTypes.node,
  children: PropTypes.node,
  content: PropTypes.node,
  description: PropTypes.node,
  duration: PropTypes.string,
  durationLabel: PropTypes.string,
  date: PropTypes.node,
  image: PropTypes.object,
  kicker: PropTypes.node,
  segments: PropTypes.array,
  segmentsTitle: PropTypes.string,
  title: PropTypes.node,
  src: PropTypes.string,
  caption: PropTypes.string,
}
ArticleVideo.defaultProps = {
  breadcrumbs: [],
  durationLabel: 'Duration',
  segmentsTitle: 'Program Segments',
}

export default ArticleVideo
