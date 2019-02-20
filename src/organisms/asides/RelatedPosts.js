import React from 'react'

import BlockWrap from './BlockWrap'

function RelatedPosts(props) {
  return <BlockWrap {...props} type="relatedPosts" />
}

RelatedPosts.propTypes = {
  ...BlockWrap.propTypes,
}

export default RelatedPosts
