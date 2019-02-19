import React from 'react'
import PropTypes from 'prop-types'

import Blockquote from '../../atoms/texts/Blockquote'

const Pullquote = ({ author, children, text }) => (
  <Blockquote>
    <p>{text || children}</p>
    {author && (
      <cite className="o-citation u-theme--color--base">&mdash; {author}</cite>
    )}
  </Blockquote>
)

Pullquote.propTypes = {
  author: PropTypes.string,
  children: PropTypes.string,
  text: PropTypes.string,
}

export default Pullquote
