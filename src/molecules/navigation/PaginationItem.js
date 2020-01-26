import React from 'react'
import PropTypes from 'prop-types'

import { Link, Span } from '../../helpers/Element'

function onItemClick(number, cb) {
  return cb
    ? event => {
        event.preventDefault()
        cb(number)
      }
    : null
}

function PaginationItem({
  number,
  isCurrent,
  isDivider,
  isPrev,
  isNext,
  label,
  onClick,
  url,
}) {
  const isArrow = isPrev || isNext
  return isCurrent ? (
    <Span
      className="pagination__page pagination__page--current"
      paddingSize="quarter"
      themeColor="base"
      fontWeight="bold"
    >
      {number}
    </Span>
  ) : isDivider ? (
    <span className="pagination__divide">{label}</span>
  ) : (
    <Link
      className={`pagination__page ${
        isArrow ? `pagination__${isPrev ? 'prev' : 'next'}` : ''
      }`}
      href={url}
      onClick={onItemClick(number, onClick)}
      paddingSize="quarter"
      themeColor="darker"
      fontWeight="bold"
    >
      {isArrow ? label : label || number}
    </Link>
  )
}

PaginationItem.propTypes = {
  number: PropTypes.number,
  isCurrent: PropTypes.bool,
  isDivider: PropTypes.bool,
  isNext: PropTypes.bool,
  isPrev: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onClick: PropTypes.func,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
PaginationItem.defaultProps = {
  number: 1,
  url: '',
}

export default PaginationItem
