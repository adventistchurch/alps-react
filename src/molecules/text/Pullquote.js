import React from 'react'
import PropTypes from 'prop-types'

import Blockquote from '../../atoms/texts/Blockquote'
import Element from '../../helpers/Element'

function Pullquote({ author, children, text }) {
  return (
    <Blockquote>
      {children ? children : <p>{text}</p>}
      {author && (
        <Element as="cite" className="o-citation" themeColor="base">
          &mdash; {author}
        </Element>
      )}
    </Blockquote>
  )
}

Pullquote.propTypes = {
  author: PropTypes.string,
  children: PropTypes.node,
  text: PropTypes.string,
}

export default Pullquote
