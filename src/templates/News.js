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
  latest,
  pageHeader,
  featured,
  media,
  ...templateProps
}) {
  return (
    <BlankTemplate {...templateProps}>
      <div>
        <PageHeader {...pageHeader} />
        <PageHeaderFeature
          blockType="featureWide"
          title={latest.title}
          titlePrefix={latest.prefix}
          category={latest.category}
          image={latest.image}
          date={latest.date}
          url={latest.url}
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

      <ListContent
        title={media.title}
        linkLabel={media.linkLabel}
        linkUrl={media.linkUrl}
      >
        {media.primaryItems && media.primaryItems.length > 0 && (
          <Grid
            seven
            as="section"
            wrap={6}
            spacingSize="double"
            spacingUntil="large"
          >
            <GridItem paddingSide="sides" paddingSize="zero">
              {media.primaryItems.map(
                (
                  { title, description, category, url, image, date, icon },
                  key
                ) => (
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
                    blockIconType={icon}
                  />
                )
              )}
            </GridItem>
          </Grid>
        )}

        {media.secondaryItems && media.secondaryItems.length > 0 && (
          <Grid
            as="section"
            blockRow
            seven
            wrap={6}
            spacingSize="double"
            spacingUntil="large"
          >
            <GridItem flex paddingSide="sides" paddingSize="zero">
              {media.secondaryItems.map(
                ({ title, category, url, image }, key) => (
                  <MediaBlock
                    key={`media-row-${key}`}
                    title={title}
                    category={category}
                    url={url}
                    image={image}
                    type="mediaRow"
                  />
                )
              )}
            </GridItem>
          </Grid>
        )}
      </ListContent>
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
  media: PropTypes.shape({
    title: PropTypes.string,
    linkLabel: PropTypes.string,
    linkUrl: PropTypes.string,
    primary: PropTypes.array,
    secondary: PropTypes.array,
  }),
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
  media: {
    title: 'Media',
    linkLabel: 'See all',
    linkUrl: '#',
    primaryItems: [],
    secondaryItems: [],
  },
}

export default News
