import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import MediaBlock from '../../molecules/blocks/MediaBlock'

export const pageHeaderFeatureBlockTypes = [
  'feature',
  'column',
  'full',
  'longform',
]

function PageHeaderFeature({ blocks, blocksType, hasScroll }) {
  const classes = []
  if (blocksType === 'column') classes.push('c-page-header__3-col')
  if (hasScroll) classes.push('has-scroll')
  const headerClasses = classes.join(' ')

  return (
    <header className={`c-page-header c-page-header__feature ${headerClasses}`}>
      <div className="c-page-header__content">
        {renderItems(blocks, MediaBlock, { type: blocksType })}
      </div>
      {hasScroll && <a href="#top" className="c-page-header__scroll" />}
    </header>
  )
}

PageHeaderFeature.propTypes = {
  blocks: PropTypes.array,
  blocksType: PropTypes.oneOf(pageHeaderFeatureBlockTypes),
  hasScroll: PropTypes.bool,
}

PageHeaderFeature.defaultProps = {
  blocks: [],
  blocksType: 'feature',
  hasScroll: false,
}

export default PageHeaderFeature
