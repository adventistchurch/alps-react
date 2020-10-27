import React from 'react'
import PropTypes from 'prop-types'

import { Section } from '../../helpers/Element'
import GridSeven from '../../atoms/grids/GridSeven'
import GridItem from '../../atoms/grids/GridItem'
import MediaBlock, { mediaBlocksTypes } from '../../molecules/blocks/MediaBlock'
import renderItems from '../../helpers/renderItems'

function BlockFeed({
  blocks,
  blocksProps,
  blocksType,
  grid,
  gridItemProps,
  gridNoWrap,
}) {
  const itemsProps = {
    ...blocksProps,
    type: blocksType,
  }

  return (
    <Section className="c-section c-section__block-feed" spacing="double">
      {grid ? (
        <GridSeven noGutters noWrapClass={gridNoWrap}>
          {renderItems(blocks, block => (
            <GridItem {...gridItemProps}>
              <MediaBlock {...itemsProps} {...block} />
            </GridItem>
          ))}
        </GridSeven>
      ) : (
        renderItems(blocks, MediaBlock, itemsProps)
      )}
    </Section>
  )
}

BlockFeed.propTypes = {
  blocks: PropTypes.array,
  blocksProps: PropTypes.object,
  blocksType: PropTypes.oneOf(mediaBlocksTypes),
  grid: PropTypes.bool,
  gridItemProps: PropTypes.object,
  gridNoWrap: PropTypes.bool,
}
BlockFeed.defaultProps = {
  blocksType: 'row',
  gridItemProps: { sizeAtS: 3, sizeAtXL: 2 },
}

export default BlockFeed
