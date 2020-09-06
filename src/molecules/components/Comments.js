import React from 'react'
import PropTypes from 'prop-types'

import Accordion from './Accordion'
import AccordionItem from './AccordionItem'
import Comment from './Comment'
import { dateFormats, dateModes } from '../../helpers/DateTime'

/**
 * List of comments
 */
export default function Comments({ heading, items, icon, expanded, onChange }) {
  return (
    <Accordion>
      <AccordionItem
        heading={heading}
        content={items.map((item, i) => (
          <Comment key={`comment-${i}`} {...item} />
        ))}
        icon={icon}
        open={expanded}
        onChange={onChange}
      />
    </Accordion>
  )
}

Comments.propTypes = {
  /**
   * Comments heading
   */
  heading: PropTypes.node,
  /**
   * List of comments
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      byline: PropTypes.string,
      bylineLink: PropTypes.string,
      children: PropTypes.node,
      date: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
        PropTypes.string,
      ]),
      dateMode: PropTypes.oneOf(dateModes),
      dateLocales: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
      dateFormat: PropTypes.oneOf(dateFormats),
      timeFormat: PropTypes.oneOf(dateFormats),
      editLabel: PropTypes.string,
      editUrl: PropTypes.string,
      replyLabel: PropTypes.string,
      replyUrl: PropTypes.string,
      text: PropTypes.node,
    })
  ),
  /**
   * Sets custom icon
   */
  icon: PropTypes.string,
  /**
   * Sets custom icon
   */
  expanded: PropTypes.bool,
  /**
   * Sets custom icon
   */
  onChange: PropTypes.func,
}

Comments.defaultProps = {
  items: [],
  heading: 'Comments',
  icon: 'contact',
  expanded: false,
}
