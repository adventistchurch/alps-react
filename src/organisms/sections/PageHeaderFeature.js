import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Link } from '../../helpers/Element'
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

function useHeaderClasses(blockType, hasScroll = false) {
  return useMemo(() => {
    const classes = []
    if (blockType === 'column') classes.push('c-page-header__3-col')
    if (hasScroll) classes.push('has-scroll')
    return classes.join(' ')
  }, [blockType, hasScroll])
}

function PageHeaderFeature({ blocks, blockType, hasScroll, ...props }) {
  const headerClasses = useHeaderClasses(blockType, hasScroll)

  return (
    <header className={`c-page-header c-page-header__feature ${headerClasses}`}>
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
