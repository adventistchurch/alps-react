import React from 'react'
import PropTypes from 'prop-types'

import MediaBlock from '../../molecules/blocks/MediaBlock/index'
import ContentBlock from '../../molecules/blocks/ContentBlock'

import renderItems from '../../helpers/renderItems'

const SidebarBlock = ({ blocks, render, heading, linkText, url }) => {
  const wrapperClass =
    render == 'relatedPosts'
      ? 'c-related-posts'
      : render == 'mediaBlock' || render == 'contentBlock'
      ? 'c-block-wrap'
      : 'c-block-wrap'

  const Component =
    render == 'mediaBlock' || render == 'relatedPosts'
      ? MediaBlock
      : ContentBlock

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

SidebarBlock.propTypes = {
  render: PropTypes.oneOf(['mediaBlock', 'contentBlock', 'relatedPosts']),
  heading: PropTypes.string,
  linkText: PropTypes.string,
  url: PropTypes.string,
  blocks: PropTypes.array,
}

export default SidebarBlock
