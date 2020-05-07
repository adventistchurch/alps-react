import React from 'react'
import PropTypes from 'prop-types'

import MediaBlock from '../../molecules/blocks/MediaBlock'
import HeadingBlock from '../../molecules/blocks/HeadingBlock'
import ContentBlock from '../../molecules/blocks/ContentBlock'
import renderItems from '../../helpers/renderItems'
import { Div } from '../../helpers/Element'

function BlockWrap({ items, title, linkLabel, linkUrl, type }) {
  const blockProps = type === 'mediaBlock' ? { type: 'stacked' } : {}

  return (
    <Div className="c-block-wrap" spacing>
      {title && (
        <HeadingBlock title={title} linkText={linkLabel} url={linkUrl} />
      )}
      <Div className="c-block-wrap__content" spacing>
        {renderItems(
          items,
          type == 'contentBlock' ? ContentBlock : MediaBlock,
          blockProps
        )}
      </Div>
    </Div>
  )
}

BlockWrap.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  linkLabel: PropTypes.string,
  linkUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.oneOf(['mediaBlock', 'contentBlock']),
}
BlockWrap.defaultProps = {
  items: [],
  type: 'mediaBlock',
}

export default BlockWrap
