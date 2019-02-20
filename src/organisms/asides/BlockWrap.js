import React from 'react'
import PropTypes from 'prop-types'

import MediaBlock from '../../molecules/blocks/MediaBlock'
import ContentBlock from '../../molecules/blocks/ContentBlock'
import renderItems from '../../helpers/renderItems'

const BlockWrap = ({ blocks, heading, linkText, type, url }) => {
  const wrapperClass =
    type == 'relatedPosts' ? 'c-related-posts' : 'c-block-wrap'

  const Component =
    type == 'mediaBlock' || type == 'relatedPosts' ? MediaBlock : ContentBlock

  return (
    <div className={`${wrapperClass} u-spacing`}>
      <div className="c-block__heading u-theme--border-color--darker">
        <h3 className="c-block__heading-title u-theme--color--darker">
          {heading}
        </h3>
        {url && linkText && (
          <a
            href={url}
            className="c-block__heading-link u-theme--color--base u-theme--link-hover--dark"
          >
            {linkText}
          </a>
        )}
      </div>
      <div className={`${wrapperClass}__content u-spacing`}>
        {renderItems(blocks, Component)}
      </div>
    </div>
  )
}

BlockWrap.propTypes = {
  blocks: PropTypes.array,
  heading: PropTypes.string,
  linkText: PropTypes.string,
  type: PropTypes.oneOf(['mediaBlock', 'contentBlock', 'relatedPosts']),
  url: PropTypes.string,
}
BlockWrap.defaultProps = {
  type: 'mediaBlock',
  blocks: [],
}

export default BlockWrap
