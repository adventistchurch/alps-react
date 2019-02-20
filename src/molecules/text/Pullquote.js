import React from 'react'
import PropTypes from 'prop-types'

import Blockquote from '../../atoms/texts/Blockquote'

function Pullquote({ author, children, text }) {
  return (
    <Blockquote>
      {children ? children : <p>{text}</p>}
      {author && (
        <cite className="o-citation u-theme--color--base">
          &mdash; {author}
        </cite>
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
