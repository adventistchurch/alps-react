import React from 'react'
import PropTypes from 'prop-types'

import HeadingBlock from '../../molecules/blocks/HeadingBlock'
import Comment from '../../molecules/components/Comment'
import CommentForm from '../../molecules/forms/CommentForm'

// Note: This component allows more that one level replies. ALPS doesn't contemplate that.
function CommentsList({ items, level }) {
  const childrenClass = level > 0 ? 'children__' : ''
  const listClass = `c-comment__${childrenClass}list`
  const itemClass = `${listClass}-item`

  return (
    <ul className={`${listClass} u-spacing`}>
      {items.map(({ byline, replies, date, text }, key) => (
        <li className={`${itemClass} comment u-spacing`} key={`comment-${key}`}>
          <Comment byline={byline} date={date} text={text} />
          {replies && <CommentsList items={replies} level={level + 1} />}
        </li>
      ))}
    </ul>
  )
}
CommentsList.propTypes = {
  level: PropTypes.number,
  items: PropTypes.array,
}
CommentsList.defaultProps = {
  areReplies: false,
}

function Comments({ items, title }) {
  return (
    <section className="c-comments u-spacing--double">
      <HeadingBlock title={title} />
      <CommentsList items={items} level={0} />
      <CommentForm /> {/* TODO: Set CommentForm props here...*/}
    </section>
  )
}

Comments.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string.isRequired,
}
Comments.defaultProps = {
  items: [],
}

export default Comments
