import React from 'react'
import PropTypes from 'prop-types'

import Grid from '../atoms/grids/Grid'
import GridItem from '../atoms/grids/GridItem'
import ContentBlock from '../molecules/blocks/ContentBlock'
import MediaBlock from '../molecules/blocks/MediaBlock'
import ListContent from '../organisms/content/ListContent'
import PageHeader from '../organisms/sections/PageHeader'
import PageHeaderFeature from '../organisms/sections/PageHeaderFeature'
import BlankTemplate from './BlankTemplate'

function News({
  aside,
  breaking,
  pageHeader,
  featured,
  mediaContent,
  mediaRows,
  ...templateProps
}) {
  return (
    <BlankTemplate {...templateProps}>
      <div>
        <PageHeader {...pageHeader} />
        <PageHeaderFeature
          title={breaking.title}
          titlePrefix={breaking.prefix}
          category={breaking.category}
          image={breaking.image}
          date={breaking.date}
          url={breaking.url}
        />
      </div>

      <Grid
        seven
        as="section"
        wrap={6}
        spacingSize="double"
        spacingUntil="large"
      >
        <GridItem sizeAtL={4} paddingSide="sides" paddingSize="zero">
          <ListContent
            title={featured.title}
            linkLabel={featured.linkLabel}
            linkUrl={featured.linkUrl}
          >
            {featured.items.map(
              ({ title, category, url, image, date }, key) => (
                <MediaBlock
                  key={`featured-item-${key}`}
                  title={title}
                  category={category}
                  url={url}
                  image={image}
                  type="featuredNews"
                  date={date}
                />
              )
            )}
          </ListContent>
        </GridItem>

        {aside && (
          <GridItem sizeAtL={2} paddingSide="sides" paddingSize="zero">
            <ListContent
              title={aside.title}
              linkLabel={aside.linkLabel}
              linkUrl={aside.linkUrl}
              contentSpacing={null}
            >
              {aside.items.map(({ title, category, url }, key) => (
                <ContentBlock
                  key={`aside-item-${key}`}
                  title={title}
                  category={category}
                  url={url}
                  titleSize="s"
                  spacingSize="half"
                  paddingSize="double"
                  paddingSide="bottom"
                />
              ))}
            </ListContent>
          </GridItem>
        )}
      </Grid>

      {mediaContent && (
        <Grid
          seven
          as="section"
          wrap={6}
          spacingSize="double"
          spacingUntil="large"
        >
          <GridItem paddingSide="sides" paddingSize="zero">
            <ListContent
              title={mediaContent.title}
              linkLabel={mediaContent.linkLabel}
              linkUrl={mediaContent.linkUrl}
            >
              {mediaContent.items.map(
                ({ title, description, category, url, image, date }, key) => (
                  <MediaBlock
                    key={`media-content-${key}`}
                    asBackgroundImage
                    title={title}
                    description={description}
                    category={category}
                    url={url}
                    image={image}
                    type="mediaContent"
                    date={date}
                    blockIconType="gallery"
                  />
                )
              )}
            </ListContent>
          </GridItem>
        </Grid>
      )}

      {mediaRows.length > 0 && (
        <Grid
          as="section"
          blockRow
          seven
          wrap={6}
          spacingSize="double"
          spacingUntil="large"
        >
          <GridItem flex paddingSide="sides" paddingSize="zero">
            {mediaRows.map(({ title, category, url, image }, key) => (
              <MediaBlock
                key={`media-row-${key}`}
                title={title}
                category={category}
                url={url}
                image={image}
                type="mediaRow"
              />
            ))}
          </GridItem>
        </Grid>
      )}
    </BlankTemplate>
  )
}

News.propTypes = {
  pageHeader: PropTypes.shape(PageHeader.propTypes),
  aside: PropTypes.shape({
    title: PropTypes.string,
    linkLabel: PropTypes.string,
    linkUrl: PropTypes.string,
    items: PropTypes.array,
  }),
  featured: PropTypes.shape({
    title: PropTypes.string,
    linkLabel: PropTypes.string,
    linkUrl: PropTypes.string,
    items: PropTypes.array,
  }),
  mediaContent: PropTypes.shape({
    title: PropTypes.string,
    linkLabel: PropTypes.string,
    linkUrl: PropTypes.string,
    items: PropTypes.array,
  }),
  mediaRows: PropTypes.array,
  ...BlankTemplate.propTypes,
}
News.defaultProps = {
  aside: {
    title: 'Aside',
    linkLabel: 'See all',
    linkUrl: '#',
    items: [],
  },
  featured: {
    title: 'Featured',
    linkLabel: 'See all',
    linkUrl: '#',
    items: [],
  },
  mediaContent: {
    title: 'Media',
    linkLabel: 'See all',
    linkUrl: '#',
    items: [],
  },
  mediaRows: [],
}

export default News
