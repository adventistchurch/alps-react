import React from 'react'
import PropTypes from 'prop-types'

import Grid from '../../atoms/grids/Grid'
import GridItem from '../../atoms/grids/GridItem'
import MediaBlock, { mediaBlocksTypes } from '../../molecules/blocks/MediaBlock'
import renderItems from '../../helpers/renderItems'

function BlockFeed({ blocks, blocksProps, blocksType, grid }) {
  const itemsProps = {
    ...blocksProps,
    type: blocksType,
  }

  return (
    <section className="c-section c-section__block-feed u-spacing--double">
      {grid ? (
        <Grid seven noGutters>
          {renderItems(blocks, block => (
            <GridItem sizeAtS="3" sizeAtXL="2">
              <MediaBlock {...itemsProps} {...block} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        renderItems(blocks, MediaBlock, itemsProps)
      )}
    </section>
  )
}

BlockFeed.propTypes = {
  blocks: PropTypes.array,
  blocksProps: PropTypes.object,
  blocksType: PropTypes.oneOf(mediaBlocksTypes),
  grid: PropTypes.bool,
}
BlockFeed.defaultProps = {
  blocksType: 'row',
  grid: false,
}

export default BlockFeed
