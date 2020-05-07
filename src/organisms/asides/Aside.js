import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../helpers/Element'
import SearchFilter from '../../molecules/forms/SearchFilter'
import BlockWrap from './BlockWrap'

function Aside({ primary, secondary, search }) {
  return (
    <Div spacingSize="double" paddingSide="right">
      {search && <SearchFilter {...search} />}
      {primary && <BlockWrap {...primary} type="mediaBlock" />}
      {secondary && <BlockWrap {...secondary} type="contentBlock" />}
    </Div>
  )
}

Aside.propTypes = {
  primary: PropTypes.shape(BlockWrap.propTypes),
  secondary: PropTypes.shape(BlockWrap.propTypes),
  search: PropTypes.shape(SearchFilter.propTypes),
}

export default Aside
