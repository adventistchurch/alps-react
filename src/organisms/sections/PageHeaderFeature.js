import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '../../helpers/Element'
import useClasses from '../../helpers/useClasses'
import renderItems from '../../helpers/renderItems'
import MediaBlock from '../../molecules/blocks/MediaBlock'

export const blockTypes = [
  'feature',
  'featureHalf',
  'featureWide',
  'column',
  'full',
  'longform',
]

function PageHeaderFeature({ blocks, blockType, hasScroll, ...props }) {
  const headerClasses = useClasses('c-page-header c-page-header__feature', {
    'c-page-header__3-col': blockType,
    'has-scroll': hasScroll,
  })

  return (
    <header className={headerClasses}>
      <div className="c-page-header__content">
        {blocks ? (
          renderItems(blocks, MediaBlock, { type: blockType })
        ) : (
          <MediaBlock {...props} type={blockType} />
        )}
      </div>
      {hasScroll && <Link href="#top" className="c-page-header__scroll" />}
    </header>
  )
}

PageHeaderFeature.propTypes = {
  blocks: PropTypes.array,
  blockType: PropTypes.oneOf(blockTypes),
  hasScroll: PropTypes.bool,
  ...MediaBlock.propTypes,
}

PageHeaderFeature.defaultProps = {
  blockType: 'feature',
}

export default PageHeaderFeature
