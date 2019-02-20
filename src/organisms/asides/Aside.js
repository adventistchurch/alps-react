import React from 'react'
import PropTypes from 'prop-types'

import BlockWrap from './BlockWrap'

// TODO: add search component on top

function Aside({ primary, secondary }) {
  return (
    <div className="u-spacing--double u-padding--right">
      {primary && <BlockWrap {...primary} type="mediaBlock" />}
      {secondary && <BlockWrap {...secondary} type="contentBlock" />}
    </div>
  )
}

Aside.propTypes = {
  primary: PropTypes.shape(BlockWrap.propTypes),
  secondary: PropTypes.shape(BlockWrap.propTypes),
}

export default Aside
