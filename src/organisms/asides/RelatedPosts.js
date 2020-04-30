import React from 'react'
import PropTypes from 'prop-types'

import MediaBlock from '../../molecules/blocks/MediaBlock'
import HeadingBlock from '../../molecules/blocks/HeadingBlock'
import renderItems from '../../helpers/renderItems'
import { Div } from '../../helpers/Element'

function RelatedPosts({ blocks, heading, linkText, url }) {
  return (
    <Div className="c-related-posts" spacing>
      <HeadingBlock title={heading} linkText={linkText} url={url} />
      <Div className="c-related-posts__content" spacing>
        {renderItems(blocks, MediaBlock, { type: 'relatedPost' })}
      </Div>
    </Div>
  )
}

RelatedPosts.propTypes = {
  blocks: PropTypes.array,
  heading: PropTypes.string,
  linkText: PropTypes.string,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
RelatedPosts.defaultProps = {
  type: 'mediaBlock',
  blocks: [],
}

export default RelatedPosts
