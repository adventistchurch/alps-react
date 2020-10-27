import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import GridItem from '../atoms/grids/GridItem'
import GridSeven from '../atoms/grids/GridSeven'
import Text from '../atoms/texts/Text'
import { Div } from '../helpers/Element'
import BreakoutBlock from '../molecules/blocks/BreakoutBlock'
import FacetFilter from '../molecules/forms/FacetFilter'
import Pagination from '../molecules/navigation/Pagination'
import Aside from '../organisms/asides/Aside'
import ListContent from '../organisms/content/ListContent'
import PageHeaderLong from '../organisms/sections/PageHeaderLong'
import BlockFeed from '../organisms/sections/BlockFeed'
import BlankTemplate from './BlankTemplate'

export default function ArchivePage({
  articles,
  articleCta,
  aside,
  breakout,
  filters,
  pageHeader,
  pagination,
  ...templateProps
}) {
  const { title: filtersTitle, ...filtersProps } = filters

  const articleProps = useMemo(
    () => ({ cta: articleCta, ctaIconPosition: 'right' }),
    [articleCta]
  )

  return (
    <BlankTemplate {...templateProps}>
      <PageHeaderLong {...pageHeader} />

      {/* l-main__content l-grid l-grid--7-col u-shift--left--1-col--at-xxlarge l-grid-wrap--6-of-7 u-spacing--double--until-xxlarge u-padding--zero--sides */}
      <GridSeven
        className="l-main__content"
        id="top"
        as="section"
        gridWrap="6"
        noWrapClass
        shiftLeftAt="xxlarge"
        spacingDoubleUntil="xxlarge"
        paddingSides="zero"
      >
        <GridItem className="c-article" sizeAtL="4" sizeAtXL="3">
          <Text
            as="article"
            className="c-article__body"
            hasDropcap={false}
            spacing="double"
            spaceTop
          >
            <GridItem
              gridNoGutters
              noItemClass
              noGridClass
              shiftLeftAt="xlarge"
              shiftRightAt="large"
              size="5"
              sizeAtL="4"
              sizeAtXL="3"
              spacing="double"
            >
              <BlockFeed
                blocks={articles}
                blocksType="archivePage"
                blocksProps={articleProps}
                spacing="double"
              />
              {pagination && <Pagination {...pagination} />}
            </GridItem>
          </Text>
        </GridItem>

        <Div
          className="c-sidebar"
          gridItem
          gridItemSizeAtL="2"
          gridItemSizeAtXL="2"
          paddingSides="zero"
          spacing
        >
          <Div spacing="double" paddingRight>
            {breakout && <BreakoutBlock {...breakout} />}
            <ListContent title={filtersTitle} linkUrl={null} paddingRight>
              <FacetFilter {...filtersProps} title={null} />
            </ListContent>
            {aside}
          </Div>
        </Div>
      </GridSeven>
    </BlankTemplate>
  )
}

ArchivePage.propTypes = {
  aside: PropTypes.shape(Aside.propTypes),
  breakout: PropTypes.shape(BreakoutBlock.propTypes),
  articles: PropTypes.array,
  articleCta: PropTypes.node,
  filters: PropTypes.shape(FacetFilter.propTypes),
  pageHeader: PropTypes.shape(PageHeaderLong.propTypes),
  pagination: PropTypes.shape(Pagination.propTypes),
  ...BlankTemplate.propTypes,
}
ArchivePage.defaultProps = {
  articles: [],
  articleCta: 'Learn more',
}
