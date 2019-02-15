import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import setLazy from '../../helpers/lazy'

function Image({ as, lazy, src, srcSet, ...others }) {
  const ref = useRef(null)

  const srcPrefix = lazy ? 'data-' : ''
  const props = {
    [`${srcPrefix}src`]: src,
    [`${srcPrefix}srcset`]: srcSet,
    itemProp: 'image',
    ref,
    ...others,
  }

  if (lazy && ref.current) setLazy(ref.current)

  return React.createElement(as, props)
}

Image.propTypes = {
  alt: PropTypes.string,
  as: PropTypes.oneOf(['img', 'source']),
  className: PropTypes.string,
  lazy: PropTypes.bool,
  src: PropTypes.string,
  srcSet: PropTypes.string,
}
Image.defaultProps = {
  as: 'img',
  lazy: true,
}

export default Image
