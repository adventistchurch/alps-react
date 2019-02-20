import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../../atoms/images/Picture'
import DatetimeFormat, { dateFormats } from '../../helpers/datetimeFormat'

function Comment({
  avatar,
  byline,
  children,
  date,
  dateFormat,
  editLabel,
  editUrl,
  replyLabel,
  replyUrl,
  text,
}) {
  return (
    <div className="c-comment--inner u-border--left u-theme--border-color--darker">
      <div className="c-comment__avatar u-space--right">
        <Picture image={avatar} />
      </div>
      <div className="c-comment__body u-spacing--quarter">
        <div className="c-comment__meta">
          <span className="byline u-font--secondary--s can-be--white u-theme--color--darker">
            <a href="">{byline}</a>
          </span>
          <span className="o-divider">|</span>
          <span className="pub_date u-font--secondary--s u-color--gray can-be--white">
            <DatetimeFormat date={date} dateFormat={dateFormat} />
          </span>
          {editUrl && (
            <span className="c-comment__edit-link u-font--secondary--s u-theme--color--base">
              <a className="c-comment-edit-link" href={editUrl}>
                {editLabel}
              </a>
            </span>
          )}
        </div>
        <p className="c-comment__content">{children || text}</p>
        {replyUrl && (
          <div className="c-comment__reply">
            <a
              href={replyUrl}
              className="u-font--secondary--s u-theme--color--base"
            >
              {replyLabel}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

Comment.propTypes = {
  avatar: Picture.propTypes.image,
  byline: PropTypes.string,
  children: PropTypes.node,
  date: PropTypes.number,
  dateFormat: PropTypes.oneOf(dateFormats),
  editUrl: PropTypes.string,
  editLabel: PropTypes.string,
  replyLabel: PropTypes.string,
  replyUrl: PropTypes.string,
  text: PropTypes.string,
}

Comment.defaultProps = {
  dateFormat: 'datetime',
  editLabel: 'Edit',
  replyLabel: 'Reply',
}

export default Comment
