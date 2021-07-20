import React from 'react'
import PropTypes from 'prop-types'

import Grid from '../atoms/grids/Grid'
import GridItem from '../atoms/grids/GridItem'
import GridSeven from '../atoms/grids/GridSeven'
import { Div } from '../helpers/Element'
import MediaBlock from '../molecules/blocks/MediaBlock'
import Pagination from '../molecules/navigation/Pagination'
import Aside from '../organisms/asides/Aside'
import ListContent from '../organisms/content/ListContent'
import PageHeader from '../organisms/sections/PageHeader'
import PageHeaderFeature from '../organisms/sections/PageHeaderFeature'
import BlankTemplate from './BlankTemplate'

function News({
  archive,
  aside,
  latest,
  pageHeader,
  featured,
  extendedFeatures,
  media,
  pagination,
  subscribeForm,
  ...templateProps
}) {
  return (
    <BlankTemplate {...templateProps}>
      <div>
        {pageHeader && <PageHeader {...pageHeader} />}
        {featured && (
          <PageHeaderFeature
            asBackgroundImage
            {...featured}
            blockType="featureWide"
          />
        )}
      </div>

      <Grid seven as="section" wrap={6} spacingDoubleUntil="large">
        <GridItem sizeAtL={4} paddingSides="zero">
          {extendedFeatures?.items?.length > 0 && (
            <ListContent
              title={extendedFeatures.title}
              linkLabel={extendedFeatures.linkLabel}
              linkUrl={extendedFeatures.linkUrl}
              paddingRight
              paddingBottom="double"
            >
              {extendedFeatures.items &&
                extendedFeatures.items.map((item, key) => (
                  <MediaBlock
                    key={`extended-featured-item-${key}`}
                    type="featuredNews"
                    {...item}
                  />
                ))}
            </ListContent>
          )}
          <ListContent
            title={latest.title}
            linkLabel={latest.linkLabel}
            linkUrl={latest.linkUrl}
            paddingRight
          >
            {latest.items &&
              latest.items.map((item, key) => (
                <MediaBlock
                  key={`featured-item-${key}`}
                  type="featuredNews"
                  {...item}
                />
              ))}
          </ListContent>
          {pagination && (
            <Div paddingTop="double">
              <Pagination {...pagination} />
            </Div>
          )}
        </GridItem>

        {aside && (
          <GridItem sizeAtL={2} paddingSides="zero">
            <Aside>{aside}</Aside>
          </GridItem>
        )}
      </Grid>

      <ListContent
        title={media.title}
        linkLabel={media.linkLabel}
        linkUrl={media.linkUrl}
      >
        {media.primaryItems && media.primaryItems.length > 0 && (
          <Grid seven as="section" wrap={6} spacingDoubleUntil="large">
            <GridItem paddingSides="zero">
              {media.primaryItems.map((item, key) => (
                <MediaBlock
                  key={`media-content-${key}`}
                  asBackgroundImage
                  type="mediaContent"
                  {...item}
                />
              ))}
            </GridItem>
          </Grid>
        )}

        {media.secondaryItems && media.secondaryItems.length > 0 && (
          <Grid as="section" blockRow seven wrap={6} spacingDoubleUntil="large">
            <GridItem flex paddingSides="zero">
              {media.secondaryItems.map((item, key) => (
                <MediaBlock
                  key={`media-row-${key}`}
                  type="mediaRow"
                  {...item}
                />
              ))}
            </GridItem>
          </Grid>
        )}
      </ListContent>
      <GridSeven as="section" gridWrap="6" noWrapClass shiftLeftAt="large">
        <GridItem className="c-article" sizeAtL="4" spacing="triple">
          {subscribeForm}
          {archive && (
            <ListContent
              title={archive.title}
              linkLabel={archive.linkLabel}
              linkUrl={archive.linkUrl}
            >
              {archive.items &&
                archive.items.map(
                  ({ title, category, url, image, date }, key) => (
                    <MediaBlock
                      key={`archive-item-${key}`}
                      title={title}
                      category={category}
                      url={url}
                      image={image}
                      type="archiveHome"
                      date={date}
                    />
                  )
                )}
            </ListContent>
          )}
        </GridItem>
      </GridSeven>
    </BlankTemplate>
  )
}

News.propTypes = {
  pageHeader: PropTypes.shape(PageHeader.propTypes),
  archive: PropTypes.shape({
    title: PropTypes.string,
    linkLabel: PropTypes.string,
    linkUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    content: PropTypes.node,
  }),
  aside: PropTypes.shape({
    primary: PropTypes.object,
    secondary: PropTypes.object,
    search: PropTypes.object,
  }),
  featured: PropTypes.object,
  extendedFeatures: PropTypes.shape({
    title: PropTypes.string,
    linkLabel: PropTypes.string,
    linkUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    items: PropTypes.array,
  }),
  latest: PropTypes.shape({
    title: PropTypes.string,
    linkLabel: PropTypes.string,
    linkUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    items: PropTypes.array,
  }),
  media: PropTypes.shape({
    title: PropTypes.string,
    linkLabel: PropTypes.string,
    linkUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    primary: PropTypes.array,
    secondary: PropTypes.array,
  }),
  subscribeForm: PropTypes.node,
  ...BlankTemplate.propTypes,
}
News.defaultProps = {
  aside: {
    title: 'Aside',
    linkLabel: 'See all',
    linkUrl: '#',
  },
  extendedFeatures: {
    title: 'Featured Stories',
    linkLabel: 'See all',
    linkUrl: '#',
  },
  latest: {
    title: 'Latest',
    linkLabel: 'See all',
    linkUrl: '#',
  },
  archive: {
    title: 'Archive',
    linkLabel: 'See all',
    linkUrl: '#',
  },
  media: {
    title: 'Media',
    linkLabel: 'See all',
    linkUrl: '#',
  },
}

export default News
