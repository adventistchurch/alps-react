import React from 'react'
import PropTypes from 'prop-types'

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
  return isCurrent ? (
    <span className="pagination__page pagination__page--current u-padding--quarter u-theme--color--base u-font-weight--bold">
      {number}
    </span>
  ) : isDivider ? (
    <span className="pagination__divide">{label}</span>
  ) : (
    <a
      className={`pagination__page ${
        isPrev || isNext ? `pagination__${isPrev ? 'prev' : 'next'}` : ''
      } u-padding--quarter u-theme--color--darker u-font-weight--bold`}
      href={url}
      onClick={onItemClick(number, onClick)}
    >
      {label || number}
    </a>
  )
}

PaginationItem.propTypes = {
  number: PropTypes.number,
  isCurrent: PropTypes.bool,
  isDivider: PropTypes.bool,
  isNext: PropTypes.bool,
  isPrev: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  url: PropTypes.string,
}
PaginationItem.defaultProps = {
  number: 1,
  url: '',
}

export default PaginationItem
