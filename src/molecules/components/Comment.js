import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../atoms/images/Image'
import Byline from '../../molecules/text/Byline'
import DateTimeFormat, { dateFormats } from '../../helpers/DateTimeFormat'
import { Div, Link, Span } from '../../helpers/Element'

function Comment({
  avatar,
  byline,
  bylineLink,
  children,
  date,
  dateFormat,
  dateLocales,
  editLabel,
  editUrl,
  replyLabel,
  replyUrl,
  text,
}) {
  return (
    <Div
      className="c-comment--inner"
      borderSide="left"
      themeBorder="darker"
      spaceSide="bottom"
    >
      <Div className="c-comment__avatar" spaceSide="right">
        <Image alt={byline} src={avatar} />
      </Div>
      <Div className="c-comment__body" spacingSize="quarter">
        <div className="c-comment__meta">
          <Byline as="span">
            {bylineLink ? <Link href={bylineLink}>{byline}</Link> : byline}
          </Byline>
          <span className="o-divider">|</span>
          <Span
            className="pub_date"
            fontType="secondary"
            fontSize="s"
            canBe="white"
            color="gray"
          >
            <DateTimeFormat
              datetime={date}
              format={dateFormat}
              locales={dateLocales}
            />
          </Span>
          {editUrl && (
            <Span
              className="c-comment__edit-link"
              fontType="secondary"
              fontSize="s"
              themeColor="base"
            >
              <Link className="c-comment-edit-link" href={editUrl}>
                {editLabel}
              </Link>
            </Span>
          )}
        </div>
        <p className="c-comment__content">{children || text}</p>
        {replyUrl && (
          <div className="c-comment__reply">
            <Link
              href={replyUrl}
              fontType="secondary"
              fontSize="s"
              themeColor="base"
            >
              {replyLabel}
            </Link>
          </div>
        )}
      </Div>
    </Div>
  )
}

Comment.propTypes = {
  avatar: Image.propTypes.src,
  byline: PropTypes.string,
  bylineLink: PropTypes.string,
  children: PropTypes.node,
  date: PropTypes.number,
  dateFormat: PropTypes.oneOf(dateFormats),
  dateLocales: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  editUrl: PropTypes.string,
  editLabel: PropTypes.string,
  replyLabel: PropTypes.string,
  replyUrl: PropTypes.string,
  text: PropTypes.string,
}

Comment.defaultProps = {
  dateFormat: 'datetime',
  editLabel: '(Edit)',
  replyLabel: 'Reply',
}

export default Comment
