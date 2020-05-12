import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../helpers/Element'
import SearchFilter from '../../molecules/forms/SearchFilter'
import BlockWrap from './BlockWrap'

function Aside({ content, contentPosition, primary, secondary, search }) {
  return (
    <Div spacingSize="double" paddingSide="right">
      {contentPosition === 'top' && content}
      {search && <SearchFilter {...search} />}
      {contentPosition === 'afterSearch' && content}
      {primary && <BlockWrap {...primary} type="mediaBlock" />}
      {contentPosition === 'afterPrimary' && content}
      {secondary && <BlockWrap {...secondary} type="contentBlock" />}
      {contentPosition === 'bottom' && content}
    </Div>
  )
}

Aside.propTypes = {
  primary: PropTypes.shape(BlockWrap.propTypes),
  secondary: PropTypes.shape(BlockWrap.propTypes),
  search: PropTypes.shape(SearchFilter.propTypes),
  content: PropTypes.node,
  contentPosition: PropTypes.oneOf([
    'top',
    'afterSearch',
    'afterPrimary',
    'bottom',
  ]),
}

Aside.defaultProps = {
  contentPosition: 'top',
}

export default Aside
