import React from 'react'
import PropTypes from 'prop-types'

import Accordion from './Accordion'

import AccordionItem from './AccordionItem'

function Comments({ heading, content, icon, expanded, onChange }) {
  return (
    <Accordion>
      <AccordionItem
        heading={heading}
        content={content}
        icon={icon}
        open={expanded}
        onChange={onChange}
      />
    </Accordion>
  )
}

Comments.propTypes = {
  heading: PropTypes.node,
  content: PropTypes.node,
  icon: PropTypes.string,
  expanded: PropTypes.bool,
  onChange: PropTypes.func,
}

Comments.defaultProps = {
  heading: 'Comments',
  icon: 'contact',
  expanded: false,
}

export default Comments
