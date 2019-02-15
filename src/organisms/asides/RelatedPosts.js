import React from 'react'
import PropTypes from 'prop-types'

import SidebarBlock from './SidebarBlock'

const RelatedPosts = ({ blocks }) => {
  return <>{blocks && <SidebarBlock {...blocks} render="relatedPosts" />}</>
}

RelatedPosts.propTypes = {
  blocks: PropTypes.shape({
    heading: PropTypes.string,
    linkText: PropTypes.string,
    url: PropTypes.string,
    blocks: PropTypes.array,
  }),
}

export default RelatedPosts
