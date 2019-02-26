import React from 'react'
import PropTypes from 'prop-types'

function SliderArrow({ className, prev, next, ...props }) {
  const isPrev = prev && !next
  return (
    <span
      {...props}
      className={`c-arrow c-arrow--${
        isPrev ? 'prev' : 'next'
      } u-icon u-icon--s u-theme--color--darker slick-arrow slick-${
        isPrev ? 'prev' : 'next'
      } ${className}`}
      aria-label={isPrev ? 'Previous' : 'Next'}
    >
      {isPrev ? '‹' : '›'}
      {/* prev: '‹' == &#8249; next: '›' == &#8250; */}
    </span>
  )
}
SliderArrow.propTypes = {
  className: PropTypes.string,
  prev: PropTypes.bool,
  next: PropTypes.bool,
}
SliderArrow.defaultProps = {
  className: '',
  prev: true,
  next: false,
}

export default SliderArrow
