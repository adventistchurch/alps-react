import React from 'react'
import PropTypes from 'prop-types'

import MediaBlock from '../../molecules/blocks/MediaBlock/index'

import renderItems from '../../helpers/renderItems'

const RelatedPosts = ({ items, title }) => {
  return (
    <>
      <div className="c-related-posts u-spacing">
        <div className="c-block__heading u-theme--border-color--darker">
          <h3 className="c-block__heading-title u-theme--color--darker">
            {title}
          </h3>
        </div>
        <div className="c-related-posts__blocks u-spacing">
          {renderItems(items, MediaBlock)}
        </div>
      </div>
    </>
  )
}

RelatedPosts.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
}

RelatedPosts.defaultProps = {
  items: [],
}

export default RelatedPosts
