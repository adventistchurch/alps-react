import React from 'react'
import PropTypes from 'prop-types'

import datetimeFormat from '../../helpers/datetimeFormat'
import Picture from '../../atoms/images/Picture'

function Comment({
  avatarSrcSet,
  avatarAlt,
  datetime,
  dateFormat,
  byline,
  text,
  editUrl,
  replyUrl,
}) {
  return (
    <div className="c-comment--inner u-border--left u-theme--border-color--darker">
      <div className="c-comment__avatar u-space--right">
        <Picture image={avatarSrcSet} alt={avatarAlt} />
      </div>
      <div className="c-comment__body u-spacing--quarter">
        <div className="c-comment__meta">
          <span className="byline u-font--secondary--s can-be--white u-theme--color--darker">
            <a href="">{byline}</a>
          </span>
          <span className="o-divider">|</span>
          <span className="pub_date u-font--secondary--s u-color--gray can-be--white">
            {datetimeFormat({ date: datetime, dateFormat: dateFormat })}
          </span>
          {editUrl && (
            <span className="c-comment__edit-link u-font--secondary--s u-theme--color--base">
              <a className="c-comment-edit-link" href="">
                (Edit)
              </a>
            </span>
          )}
        </div>
        <p className="c-comment__content">{text}</p>
        {replyUrl && (
          <div className="c-comment__reply">
            <a href="" className="u-font--secondary--s u-theme--color--base">
              Reply
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

Comment.propTypes = {
  avatarSrcSet: PropTypes.object,
  avatarAlt: PropTypes.string,
  datetime: PropTypes.number,
  dateFormat: PropTypes.oneOf(['date', 'time', 'datetime']),
  byline: PropTypes.string,
  text: PropTypes.string,
  editUrl: PropTypes.string,
  replyUrl: PropTypes.string,
}

Comment.defaultProps = {}

export default Comment
