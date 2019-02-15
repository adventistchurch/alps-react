import React from 'react'
import PropTypes from 'prop-types'

import SidebarBlock from './SidebarBlock'

// TODO: add search component on top

const Aside = ({ primaryBlocks, secondaryBlocks }) => {
  return (
    <>
      {primaryBlocks && <SidebarBlock {...primaryBlocks} render="mediaBlock" />}
      {secondaryBlocks && (
        <SidebarBlock {...secondaryBlocks} render="contentBlock" />
      )}
    </>
  )
}

Aside.propTypes = {
  primaryBlocks: PropTypes.shape({
    heading: PropTypes.string,
    linkText: PropTypes.string,
    url: PropTypes.string,
    blocks: PropTypes.array,
  }),
  secondaryBlocks: PropTypes.shape({
    heading: PropTypes.string,
    linkText: PropTypes.string,
    url: PropTypes.string,
    blocks: PropTypes.array,
  }),
}

export default Aside
