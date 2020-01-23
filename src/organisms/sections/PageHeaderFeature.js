import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '../../helpers/Element'
import renderItems from '../../helpers/renderItems'
import MediaBlock from '../../molecules/blocks/MediaBlock'

export const blockTypes = ['feature', 'column', 'full', 'longform']

function PageHeaderFeature({ blocks, blockType, hasScroll, ...props }) {
  const classes = []
  if (blockType === 'column') classes.push('c-page-header__3-col')
  if (hasScroll) classes.push('has-scroll')
  const headerClasses = classes.join(' ')

  return (
    <header className={`c-page-header c-page-header__feature ${headerClasses}`}>
      <div className="c-page-header__content">
        {blocks ? (
          renderItems(blocks, MediaBlock, {
            asBackgroundImage: true,
            type: blockType,
          })
        ) : (
          <MediaBlock {...props} type={blockType} asBackgroundImage />
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
  hasScroll: false,
}

export default PageHeaderFeature
