import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../atoms/images/Image'
import Byline from '../../molecules/text/Byline'
import DateTime, { dateModes, dateFormats } from '../../helpers/DateTime'
import { Div, Link, Span } from '../../helpers/Element'

export default function Comment({
  avatar,
  byline,
  bylineLink,
  children,
  date,
  dateMode,
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
      spaceBottom
    >
      <Div className="c-comment__avatar" spaceRight>
        <Image alt={byline} src={avatar} />
      </Div>
      <Div className="c-comment__body" spacing="quarter">
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
            <DateTime datetime={date} mode={dateMode} locales={dateLocales} />
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
  /**
   * Avatar's image url
   */
  avatar: PropTypes.string,
  /**
   * Byline text
   */
  byline: PropTypes.string,
  /**
   * Byline link
   */
  bylineLink: PropTypes.string,
  /**
   * Provide comment's text as nested children
   */
  children: PropTypes.node,
  /**
   * Comment's date.
   */
  date: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.string,
  ]),
  /**
   * Defines the mode of date as one of these: `datetime`, `date` or `time`
   */
  dateMode: PropTypes.oneOf(dateModes),
  /**
   * Use it for date localization (if not set, will use browser's default locale)
   */
  dateLocales: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  /**
   * Sets format for the date part (day, month, year) of a Date
   */
  dateFormat: PropTypes.oneOf(dateFormats),
  /**
   * Sets format for the time part (hours, minutes, and seconds) of a Date
   */
  timeFormat: PropTypes.oneOf(dateFormats),
  /**
   * Edit text label
   */
  editLabel: PropTypes.string,
  /**
   * Edit link URL
   */
  editUrl: PropTypes.string,
  /**
   * Reply text label
   */
  replyLabel: PropTypes.string,
  /**
   * Reply link URL
   */
  replyUrl: PropTypes.string,
  /**
   * Provide comment's text
   */
  text: PropTypes.node,
}

Comment.defaultProps = {
  dateMode: 'datetime',
  editLabel: '(Edit)',
  replyLabel: 'Reply',
}
