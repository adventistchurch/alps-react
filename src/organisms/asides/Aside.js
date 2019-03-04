import React from 'react'
import PropTypes from 'prop-types'

import Element from '../../helpers/Element'
import SearchFilter from '../../molecules/forms/SearchFilter'
import BlockWrap from './BlockWrap'

function Aside({ primary, secondary, searchProps }) {
  return (
    <Element spacingSize="double" paddingSide="right">
      <SearchFilter {...searchProps} />
      {primary && <BlockWrap {...primary} type="mediaBlock" />}
      {secondary && <BlockWrap {...secondary} type="contentBlock" />}
    </Element>
  )
}

Aside.propTypes = {
  primary: PropTypes.shape(BlockWrap.propTypes),
  secondary: PropTypes.shape(BlockWrap.propTypes),
  searchProps: PropTypes.shape(SearchFilter.propTypes),
}

export default Aside
