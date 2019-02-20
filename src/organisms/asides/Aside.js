import React from 'react'
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
  primary: BlockWrap.propTypes,
  secondary: BlockWrap.propTypes,
}

export default Aside
