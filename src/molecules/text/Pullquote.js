import React from 'react'
import PropTypes from 'prop-types'

const Pullquote = ({ author, children, text }) => (
  <blockquote className="pullquote u-theme--border-color--darker--left u-theme--color--darker u-padding--right">
    <p>{text || children}</p>
    {author && (
      <cite className="o-citation u-theme--color--base">&mdash; {author}</cite>
    )}
  </blockquote>
)

Pullquote.propTypes = {
  author: PropTypes.string,
  children: PropTypes.string,
  text: PropTypes.string,
}

export default Pullquote
