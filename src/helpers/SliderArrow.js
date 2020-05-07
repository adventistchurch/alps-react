import React from 'react'
import PropTypes from 'prop-types'

import { Span } from '../helpers/Element'

function SliderArrow({
  className,
  prev,
  next,
  labelPrev,
  labelNext,
  ...props
}) {
  const isPrev = prev && !next

  const dir = isPrev ? 'prev' : 'next'
  const arrow = isPrev ? '‹' : '›' // prev: '‹' == &#8249; next: '›' == &#8250;
  const label = isPrev ? labelPrev : labelNext

  return (
    <Span
      {...props}
      className={`c-arrow c-arrow--${dir} slick-arrow slick-${dir} ${className}`} // u-icon u-icon--s ?
      aria-label={label}
      themeColor="darker"
    >
      {arrow}
    </Span>
  )
}
SliderArrow.propTypes = {
  className: PropTypes.string,
  labelPrev: PropTypes.string,
  labelNext: PropTypes.string,
  prev: PropTypes.bool,
  next: PropTypes.bool,
}
SliderArrow.defaultProps = {
  className: '',
  prev: true,
  next: false,
  labelPrev: 'Previous',
  labelNext: 'Next',
}

export default SliderArrow
