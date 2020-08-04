import React from 'react'
import PropTypes from 'prop-types'

import Grid from '../atoms/grids/Grid'
import GridItem from '../atoms/grids/GridItem'
import MediaBlock from '../molecules/blocks/MediaBlock'
import FacetFilter from '../molecules/forms/FacetFilter'
import Pagination from '../molecules/navigation/Pagination'
import Aside from '../organisms/asides/Aside'
import ListContent from '../organisms/content/ListContent'
import PageHeader from '../organisms/sections/PageHeader'
import BlankTemplate from './BlankTemplate'

function NewsArchive({
  articles,
  articlesTitle,
  aside,
  filters,
  pageHeader,
  pagination,
  ...templateProps
}) {
  const { title: filtersTitle, ...filtersProps } = filters
  return (
    <BlankTemplate {...templateProps}>
      <PageHeader {...pageHeader} />

      <Grid seven as="section" wrap={6} spacingDoubleUntil="large">
        <GridItem sizeAtL={4} paddingSides="zero" spacing="double">
          <ListContent title={articlesTitle} linkUrl={null} paddingRight>
            {articles &&
              articles.map((item, key) => (
                <MediaBlock
                  key={`featured-item-${key}`}
                  type="archive"
                  {...item}
                />
              ))}
          </ListContent>

          {pagination && <Pagination {...pagination} />}
        </GridItem>

        <GridItem sizeAtL={2} paddingSides="zero" spacing="double">
          <Aside>
            <ListContent title={filtersTitle} linkUrl={null} paddingRight>
              <FacetFilter {...filtersProps} title={null} />
            </ListContent>
            {aside}
          </Aside>
        </GridItem>
      </Grid>
    </BlankTemplate>
  )
}

NewsArchive.propTypes = {
  aside: PropTypes.shape(Aside.propTypes),
  articles: PropTypes.array,
  articlesTitle: PropTypes.node,
  filters: PropTypes.shape(FacetFilter.propTypes),
  pageHeader: PropTypes.shape(PageHeader.propTypes),
  pagination: PropTypes.shape(Pagination.propTypes),
  ...BlankTemplate.propTypes,
}
NewsArchive.defaultProps = {
  articles: [],
}

export default NewsArchive
